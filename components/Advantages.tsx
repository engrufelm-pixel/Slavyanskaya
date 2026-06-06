import { Icon } from '@/components/Icon';
import { SectionHeading } from '@/components/SectionHeading';
import { RevealGroup, RevealChild } from '@/components/motion/Reveal';
import { advantages } from '@/lib/site';

export function Advantages() {
  return (
    <section id="advantages" className="relative scroll-mt-24 bg-ink py-24 lg:py-32">
      <div className="container-px">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            index="01"
            eyebrow="Почему мы"
            title="Подход, за который к нам возвращаются"
          />
          <p className="max-w-sm text-sm leading-relaxed text-white/45 lg:pb-2">
            Мы не конвейер. Каждая работа — это материалы, крой и шов под конкретный
            автомобиль и конкретного владельца.
          </p>
        </div>

        <RevealGroup className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-xl2 border border-white/10 bg-white/[0.04] sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map((a, i) => (
            <RevealChild key={a.title}>
              <article className="group relative h-full bg-ink p-8 transition-colors duration-500 ease-premium hover:bg-charcoal/60">
                <span className="absolute right-6 top-6 font-display text-sm text-white/15 transition-colors group-hover:text-gold/40">
                  0{i + 1}
                </span>
                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-gold transition-all duration-500 ease-premium group-hover:border-gold/40 group-hover:bg-gold group-hover:text-ink">
                  <Icon name={a.icon} size={26} weight="light" />
                </span>
                <h3 className="mt-7 font-display text-xl text-white">{a.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-white/55">{a.text}</p>
                <span className="mt-6 block h-px w-0 bg-gold transition-all duration-500 ease-premium group-hover:w-12" />
              </article>
            </RevealChild>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
