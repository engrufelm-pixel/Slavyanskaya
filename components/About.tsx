import Image from 'next/image';
import { Icon } from '@/components/Icon';
import { Reveal } from '@/components/motion/Reveal';
import { about, brand, photos } from '@/lib/site';

export function About() {
  return (
    <section id="about" className="relative scroll-mt-24 bg-ink py-24 lg:py-32">
      <div className="container-px grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Фото — заменить на реальное фото мастера/мастерской */}
        <Reveal className="lg:col-span-5" y={32}>
          <div className="relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl2 border border-white/10">
              <Image
                src={photos.about}
                alt="Натуральная кожа премиального автомобильного салона крупным планом"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover img-tone"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
            </div>
            {/* Плавающий бейдж */}
            <div className="absolute -bottom-5 -right-3 flex items-center gap-3 rounded-2xl border border-white/10 bg-charcoal/90 px-5 py-4 shadow-lift backdrop-blur-sm sm:-right-5">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold/15 text-gold">
                <Icon name="shield" size={22} weight="light" />
              </span>
              <div className="leading-tight">
                <p className="font-display text-base text-white">Личная гарантия</p>
                <p className="text-xs text-white/50">мастер ведёт проект сам</p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Текст */}
        <div className="lg:col-span-7">
          <Reveal>
            <span className="flex items-center gap-3.5">
              <span className="font-mono text-xs tracking-[0.2em] text-wine-soft">06</span>
              <span className="eyebrow">О мастерской</span>
            </span>
            <h2 className="mt-5 max-w-xl font-display text-[2.15rem] font-semibold leading-[1.1] text-white text-balance sm:text-4xl lg:text-[2.75rem]">
              {about.title}
            </h2>
            <div className="mt-6 flex max-w-xl flex-col gap-4">
              {about.paragraphs.map((p) => (
                <p key={p.slice(0, 24)} className="text-base leading-relaxed text-white/55">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>

          {/* Статистика — без карточек, через линии-разделители */}
          <Reveal delay={0.1}>
            <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-white/10 pt-8 sm:grid-cols-4">
              {about.stats.map((s) => (
                <div key={s.label} className="flex flex-col gap-1">
                  <dt className="font-display text-3xl text-gold sm:text-4xl">{s.value}</dt>
                  <dd className="text-xs leading-snug text-white/45">{s.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.15}>
            <a href="#contacts" className="btn-gold mt-10">
              Обсудить проект
              <Icon name="arrow-right" size={18} weight="bold" />
            </a>
            <span className="mt-4 block text-xs text-white/35">
              {brand.name} · {brand.tagline} · {brand.city}
            </span>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
