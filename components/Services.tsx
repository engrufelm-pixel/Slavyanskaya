import { Icon } from '@/components/Icon';
import { SectionHeading } from '@/components/SectionHeading';
import { RevealGroup, RevealChild } from '@/components/motion/Reveal';
import { contacts, services } from '@/lib/site';

export function Services() {
  return (
    <section id="services" className="relative scroll-mt-24 bg-graphite py-24 lg:py-32">
      <div className="container-px">
        <SectionHeading
          index="03"
          eyebrow="Услуги"
          title="Что мы делаем с автомобильным интерьером"
          description="Список услуг можно расширять — структура рассчитана на быструю замену под ваш прайс."
        />

        <RevealGroup className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-2" stagger={0.12}>
          {services.map((s, i) => (
            <RevealChild key={s.id}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-xl2 border border-white/10 bg-ink/60 p-8 transition-all duration-500 ease-premium hover:-translate-y-1 hover:border-gold/40 hover:shadow-lift lg:p-10">
                {/* Тонкий золотой блик в углу при наведении */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gold/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                <div className="flex items-start justify-between">
                  <span className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-gold transition-colors duration-500 group-hover:border-gold/40">
                    <Icon name={s.icon} size={30} weight="light" />
                  </span>
                  <span className="font-display text-2xl text-white/12">0{i + 1}</span>
                </div>

                <h3 className="mt-7 font-display text-2xl text-white">{s.title}</h3>
                <p className="mt-3 max-w-md text-[0.95rem] leading-relaxed text-white/55">{s.description}</p>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {s.points.map((p) => (
                    <li
                      key={p}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs text-white/60"
                    >
                      {p}
                    </li>
                  ))}
                </ul>

                <a
                  href={contacts.max}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn mt-8 inline-flex items-center gap-2 self-start text-sm font-semibold text-gold transition-colors hover:text-gold-soft"
                >
                  Узнать стоимость
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-gold/30 transition-all duration-300 ease-premium group-hover/btn:bg-gold group-hover/btn:text-ink">
                    <Icon name="arrow-up-right" size={16} weight="bold" />
                  </span>
                </a>
              </article>
            </RevealChild>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
