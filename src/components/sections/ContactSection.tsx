import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { contactPurposes, configuredSocials, site } from '@/data/site'
import { cn } from '@/lib/cn'
import { useState, type FormEvent } from 'react'

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

export function ContactSection({
  preview = false,
  showHeading = true,
}: {
  preview?: boolean
  showHeading?: boolean
}) {
  const [values, setValues] = useState<FormState>(empty)
  const [errors, setErrors] = useState<Partial<FormState>>({})
  const [submitted, setSubmitted] = useState(false)
  const whatsappHref = site.whatsapp
    ? site.whatsapp.startsWith('http')
      ? site.whatsapp
      : `https://wa.me/${site.whatsapp.replace(/\D/g, '')}`
    : ''

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

  function onSubmit(event: FormEvent) {
    event.preventDefault()
    const result = validate(values)
    setErrors(result)
    if (Object.keys(result).length > 0) return

    if (site.formEndpoint) {
      void fetch(site.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
    } else if (site.email) {
      const subject = encodeURIComponent(`${values.purpose} — ${values.name}`)
      const body = encodeURIComponent(
        `${values.message}\n\n${values.name}\n${values.organization}\n${values.email}\n${values.phone}`,
      )
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
    }

    setSubmitted(true)
  }

  return (
    <section className="bg-ivory py-24 lg:py-32">
      <Container>
        {showHeading ? (
          <SectionHeading
            kicker={preview ? '13 — Contact' : 'Contact'}
            title="Let's Create Impact"
            description="For collaborations, speaking engagements, brand partnerships, humanitarian initiatives, cultural programs and media inquiries."
          />
        ) : null}
        <div className={showHeading ? 'mt-10 flex flex-wrap gap-3' : 'flex flex-wrap gap-3'}>
          <Button href="#contact-form" variant="solid">
            Start a conversation
          </Button>
          {whatsappHref ? (
            <Button href={whatsappHref} variant="outline">
              WhatsApp
            </Button>
          ) : null}
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

        <form
          id="contact-form"
          className="mt-16 grid gap-8 lg:grid-cols-12"
          onSubmit={onSubmit}
          noValidate
        >
          {submitted ? (
            <div className="border border-charcoal/15 bg-ivory-soft p-8 lg:col-span-8">
              <p className="font-serif text-3xl">Thank you.</p>
              <p className="mt-4 max-w-xl text-stone">
                Your message has been prepared. If email is configured, your mail
                client will open. You may also continue the conversation through
                the social channels listed above.
              </p>
            </div>
          ) : (
            <div className="grid gap-6 lg:col-span-8">
              <Field
                label="Name"
                error={errors.name}
                value={values.name}
                onChange={(value) => setValues((current) => ({ ...current, name: value }))}
                required
              />
              <div className="grid gap-6 sm:grid-cols-2">
                <Field
                  label="Email"
                  type="email"
                  error={errors.email}
                  value={values.email}
                  onChange={(value) => setValues((current) => ({ ...current, email: value }))}
                  required
                />
                <Field
                  label="Phone"
                  type="tel"
                  error={errors.phone}
                  value={values.phone}
                  onChange={(value) => setValues((current) => ({ ...current, phone: value }))}
                />
              </div>
              <Field
                label="Organization"
                value={values.organization}
                onChange={(value) =>
                  setValues((current) => ({ ...current, organization: value }))
                }
              />
              <label className="block">
                <span className="label text-gold">Purpose</span>
                <select
                  required
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
                <Button type="submit" variant="solid">
                  Send message
                </Button>
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
  value,
  onChange,
  error,
  type = 'text',
  required = false,
}: {
  label: string
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
