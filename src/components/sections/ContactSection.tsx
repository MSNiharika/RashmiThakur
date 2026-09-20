import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { contactPurposes, configuredSocials, site } from '@/data/site'
import { cn } from '@/lib/cn'
import { useEffect, useState, type FormEvent } from 'react'

type FormState = {
  name: string
  email: string
  phone: string
  organization: string
  purpose: string
  message: string
}

const empty: FormState = {
  name: '',
  email: '',
  phone: '',
  organization: '',
  purpose: '',
  message: '',
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

function formEndpoint() {
  const host = window.location.hostname
  const local = host === 'localhost' || host === '127.0.0.1'
  return local ? '/enquire' : `https://formsubmit.co/ajax/${site.email}`
}

export function ContactSection({
  preview = false,
  showHeading = true,
  hideIntro = false,
}: {
  preview?: boolean
  showHeading?: boolean
  hideIntro?: boolean
}) {
  const [values, setValues] = useState<FormState>(empty)
  const [errors, setErrors] = useState<Partial<FormState>>({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [sendError, setSendError] = useState('')
  const [needsActivation, setNeedsActivation] = useState(false)
  const [honeypot, setHoneypot] = useState('')

  function validate(next: FormState) {
    const result: Partial<FormState> = {}
    if (!next.name.trim()) result.name = 'Please enter your name.'
    if (!next.email.trim() || !isEmail(next.email)) result.email = 'Please enter a valid email.'
    if (next.phone && next.phone.replace(/\D/g, '').length < 7) {
      result.phone = 'Please enter a valid phone number.'
    }
    if (!next.purpose) result.purpose = 'Please choose a purpose.'
    if (next.message.trim().length < 12) result.message = 'Please share a little more detail.'
    return result
  }

  useEffect(() => {
    const url = new URL(window.location.href)
    if (url.searchParams.get('sent') === '1') {
      setSubmitted(true)
      url.searchParams.delete('sent')
      window.history.replaceState({}, '', `${url.pathname}${url.search}${url.hash}`)
    }
  }, [])

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const result = validate(values)
    setErrors(result)
    setSendError('')
    setNeedsActivation(false)
    if (Object.keys(result).length > 0 || honeypot) return

    const payload = {
      name: values.name,
      email: values.email,
      phone: values.phone || '—',
      organization: values.organization || '—',
      purpose: values.purpose,
      message: values.message,
      _subject: `Website enquiry: ${values.purpose} — ${values.name}`,
      _replyto: values.email,
      _template: 'table',
      _captcha: 'false',
      _url: window.location.href,
    }

    setSubmitting(true)
    try {
      const body = new FormData()
      Object.entries(payload).forEach(([key, value]) => body.append(key, value))

      const response = await fetch(formEndpoint(), {
        method: 'POST',
        body,
      })
      const data = (await response.json().catch(() => null)) as {
        success?: string | boolean
        message?: string
      } | null
      const message = data?.message ?? ''
      if (/activation/i.test(message)) {
        setNeedsActivation(true)
        return
      }
      if (data && (data.success === false || data.success === 'false')) {
        throw new Error(message || 'The message could not be sent.')
      }
      if (!response.ok) {
        throw new Error(message || 'The message could not be sent.')
      }
      setSubmitted(true)
    } catch {
      const form = document.createElement('form')
      form.method = 'POST'
      form.action = `https://formsubmit.co/${site.email}`
      form.style.display = 'none'
      const fields = {
        ...payload,
        _next: `${window.location.origin}${window.location.pathname}?sent=1`,
      }
      Object.entries(fields).forEach(([key, value]) => {
        const input = document.createElement('input')
        input.type = 'hidden'
        input.name = key
        input.value = value
        form.appendChild(input)
      })
      document.body.appendChild(form)
      form.submit()
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section className={showHeading ? 'bg-ivory py-24 lg:py-32' : 'bg-ivory pb-16 pt-2 lg:pb-24 lg:pt-4'}>
      <Container>
        {showHeading ? (
          <SectionHeading
            kicker={preview ? '13 — Contact' : 'Contact'}
            title="Let's Create Impact"
            description="For collaborations, speaking engagements, brand partnerships, humanitarian initiatives, cultural programs and media inquiries."
          />
        ) : null}
        {hideIntro ? null : (
          <>
            <div className={showHeading ? 'mt-10 flex flex-wrap gap-3' : 'flex flex-wrap gap-3'}>
              <Button href="#contact-form" variant="outline">
                Start a conversation
              </Button>
              {site.email ? (
                <Button href={`mailto:${site.email}`} variant="ghost">
                  Email
                </Button>
              ) : null}
            </div>
            {configuredSocials.length > 0 ? (
              <ul className="mt-8 flex flex-wrap gap-6 text-sm">
                {configuredSocials.map((link) => (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="editorial-underline"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </>
        )}

        <form
          id="contact-form"
          className={hideIntro ? 'grid gap-8 lg:grid-cols-12' : 'mt-16 grid gap-8 lg:grid-cols-12'}
          onSubmit={onSubmit}
          noValidate
        >
          {hideIntro ? (
            <aside className="lg:col-span-4">
              <p className="label text-gold">Enquire</p>
              <p className="mt-4 font-serif italic text-3xl leading-tight sm:text-4xl">
                Write with purpose.
              </p>
              <p className="mt-4 max-w-sm text-charcoal">
                Name the collaboration, stage or cause. Every message is read with care.
              </p>
            </aside>
          ) : null}
          {submitted ? (
            <div className="border border-charcoal/15 bg-ivory-soft p-8 lg:col-span-8" role="status">
              <p className="font-quote text-3xl">Thank you.</p>
              <p className="mt-4 max-w-xl text-charcoal">
                Your enquiry has been received and we’ll reach out to you shortly. Thanks!
              </p>
            </div>
          ) : (
            <div className="grid gap-6 lg:col-span-8">
              <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
                <label>
                  Website
                  <input
                    type="text"
                    name="_honey"
                    tabIndex={-1}
                    autoComplete="off"
                    value={honeypot}
                    onChange={(event) => setHoneypot(event.target.value)}
                  />
                </label>
              </div>
              <Field
                label="Name"
                name="name"
                error={errors.name}
                value={values.name}
                onChange={(value) => setValues((current) => ({ ...current, name: value }))}
                required
              />
              <div className="grid gap-6 sm:grid-cols-2">
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  error={errors.email}
                  value={values.email}
                  onChange={(value) => setValues((current) => ({ ...current, email: value }))}
                  required
                />
                <Field
                  label="Phone"
                  name="phone"
                  type="tel"
                  error={errors.phone}
                  value={values.phone}
                  onChange={(value) => setValues((current) => ({ ...current, phone: value }))}
                />
              </div>
              <Field
                label="Organization"
                name="organization"
                value={values.organization}
                onChange={(value) =>
                  setValues((current) => ({ ...current, organization: value }))
                }
              />
              <label className="block">
                <span className="label text-gold">Purpose</span>
                <select
                  required
                  name="purpose"
                  value={values.purpose}
                  onChange={(event) =>
                    setValues((current) => ({ ...current, purpose: event.target.value }))
                  }
                  className={cn(
                    'mt-2 w-full border-0 border-b border-charcoal/25 bg-transparent py-3 outline-none',
                    errors.purpose && 'border-earth',
                  )}
                >
                  <option value="">Select</option>
                  {contactPurposes.map((purpose) => (
                    <option key={purpose} value={purpose}>
                      {purpose}
                    </option>
                  ))}
                </select>
                {errors.purpose ? (
                  <span className="mt-2 block text-sm text-earth">{errors.purpose}</span>
                ) : null}
              </label>
              <label className="block">
                <span className="label text-gold">Message</span>
                <textarea
                  required
                  name="message"
                  rows={5}
                  value={values.message}
                  onChange={(event) =>
                    setValues((current) => ({ ...current, message: event.target.value }))
                  }
                  className={cn(
                    'mt-2 w-full resize-y border-0 border-b border-charcoal/25 bg-transparent py-3 outline-none',
                    errors.message && 'border-earth',
                  )}
                />
                {errors.message ? (
                  <span className="mt-2 block text-sm text-earth">{errors.message}</span>
                ) : null}
              </label>
              <div>
                <Button type="submit" variant="solid" disabled={submitting}>
                  {submitting ? 'Sending' : 'Send message'}
                </Button>
                {needsActivation ? (
                  <p className="mt-3 max-w-xl text-sm text-earth">
                    FormSubmit has emailed {site.email} an activation link. Open that mail (check
                    spam), click Activate Form, then send this enquiry again.
                  </p>
                ) : null}
                {sendError ? <p className="mt-3 text-sm text-earth">{sendError}</p> : null}
              </div>
            </div>
          )}
        </form>
      </Container>
    </section>
  )
}

function Field({
  label,
  name,
  value,
  onChange,
  error,
  type = 'text',
  required = false,
}: {
  label: string
  name: string
  value: string
  onChange: (value: string) => void
  error?: string
  type?: string
  required?: boolean
}) {
  const id = label.toLowerCase()
  return (
    <label className="block" htmlFor={id}>
      <span className="label text-gold">{label}</span>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className={cn(
          'mt-2 w-full border-0 border-b border-charcoal/25 bg-transparent py-3 outline-none',
          error && 'border-earth',
        )}
      />
      {error ? <span className="mt-2 block text-sm text-earth">{error}</span> : null}
    </label>
  )
}
