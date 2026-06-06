import { SectionHeading } from '@/components/SectionHeading';
import { RevealGroup, RevealChild } from '@/components/motion/Reveal';
import { process } from '@/lib/site';

export function Process() {
  return (
    <section id="process" className="relative scroll-mt-24 bg-ink py-24 lg:py-32">
      <div className="container-px">
        <SectionHeading
          index="04"
          eyebrow="Как мы работаем"
          title="Пять этапов — от звонка до сдачи автомобиля"
          description="Прозрачный процесс: вы знаете цену и сроки до начала работ."
        />

        <RevealGroup
          className="relative mt-16 grid grid-cols-1 gap-10 md:grid-cols-5 md:gap-6"
          stagger={0.12}
        >
          {/* Соединительная линия на десктопе */}
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-white/15 to-transparent md:block" />

          {process.map((p, i) => (
            <RevealChild key={p.title} className="relative">
              <div className="flex flex-col items-start">
                <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-ink font-display text-lg text-gold">
                  0{i + 1}
                </span>
                <h3 className="mt-6 font-display text-lg text-white">{p.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-white/50">{p.text}</p>
              </div>
            </RevealChild>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
