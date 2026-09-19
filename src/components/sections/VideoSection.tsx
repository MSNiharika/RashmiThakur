import { FadeIn } from '@/components/animation/FadeIn'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { SmartImage } from '@/components/ui/SmartImage'
import { useVideos } from '@/hooks/useVideos'
import { vimeoEmbed, youtubeEmbed } from '@/lib/cn'
import { Play } from 'lucide-react'
import { useState } from 'react'

export function VideoSection() {
  const { videos } = useVideos()
  const [active, setActive] = useState<string | null>(null)

  return (
    <section className="bg-ivory-soft py-24 lg:py-32">
      <Container>
        <SectionHeading
          kicker="Film"
          title="Stories in Motion"
          description="Films can be connected through YouTube, Vimeo or MP4. None autoplay with sound."
        />
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {videos.map((video, index) => {
            const youtube = video.provider === 'youtube' ? youtubeEmbed(video.url) : null
            const vimeo = video.provider === 'vimeo' ? vimeoEmbed(video.url) : null
            const canPlay = Boolean(youtube || vimeo || (video.provider === 'mp4' && video.url))
            const playing = active === video.id

            return (
              <FadeIn key={video.id} delay={index * 0.05}>
                <article>
                  <div className="relative aspect-video overflow-hidden bg-sand">
                    {playing && youtube ? (
                      <iframe
                        title={video.title}
                        src={`${youtube}?autoplay=1&rel=0`}
                        className="h-full w-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : playing && vimeo ? (
                      <iframe
                        title={video.title}
                        src={`${vimeo}?autoplay=1`}
                        className="h-full w-full"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                      />
                    ) : playing && video.provider === 'mp4' ? (
                      <video className="h-full w-full" controls autoPlay src={video.url} />
                    ) : (
                      <>
                        <SmartImage
                          src={video.poster}
                          alt={video.title}
                          className="h-full w-full object-cover"
                        />
                        <button
                          type="button"
                          className="absolute inset-0 flex items-center justify-center text-ivory"
                          onClick={() => canPlay && setActive(video.id)}
                          disabled={!canPlay}
                          aria-label={canPlay ? `Play ${video.title}` : `${video.title} film to be added`}
                        >
                          <span className="flex size-14 items-center justify-center border border-ivory/70">
                            <Play className="size-5 fill-current" />
                          </span>
                        </button>
                      </>
                    )}
                  </div>
                  <p className="label mt-4 text-gold">{video.category}</p>
                  <h3 className="mt-2 font-serif text-2xl">{video.title}</h3>
                  {!canPlay ? (
                    <p className="mt-1 text-sm text-stone">{video.description}</p>
                  ) : null}
                </article>
              </FadeIn>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
