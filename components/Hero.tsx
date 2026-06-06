'use client';

import Image from 'next/image';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { Icon } from '@/components/Icon';
import { ContactChips } from '@/components/ContactChips';
import { brand, carBrands, hero } from '@/lib/site';

export function Hero() {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.12, delayChildren: 0.1 } },
  };
  const item: Variants = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="top" className="relative isolate flex min-h-[100dvh] flex-col justify-end overflow-hidden">
      {/* Фон — премиальный салон (заменить на реальное фото) */}
      <Image
        src={hero.bg}
        alt="Премиальный автомобильный салон"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover img-tone"
      />
      {/* Затемнение: слева под текст, цвет салона раскрываем справа */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/55 to-ink/15" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/92 via-ink/45 to-transparent" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(100%_75%_at_12%_82%,rgba(200,168,107,0.10),transparent_55%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(90%_70%_at_92%_18%,rgba(126,38,48,0.18),transparent_60%)]" />

      <div className="container-px relative w-full pb-14 pt-32 sm:pb-16 lg:pb-20">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl"
        >
          <div>
            <motion.span variants={item} className="eyebrow">
              {hero.eyebrow} · {brand.city}
            </motion.span>

            <motion.h1
              variants={item}
              className="mt-6 max-w-4xl font-display text-[2.25rem] font-semibold leading-[1.05] text-white text-balance sm:text-6xl lg:text-[4.4rem]"
            >
              {hero.title}
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-7 max-w-xl text-xl leading-relaxed text-white/70"
            >
              {hero.subtitle}
            </motion.p>

            <motion.div variants={item} className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href="#contacts" className="btn-gold">
                Получить консультацию
                <Icon name="arrow-right" size={18} weight="bold" />
              </a>
              <a href="#gallery" className="btn-outline">
                Посмотреть работы
              </a>
            </motion.div>

            <motion.div variants={item} className="mt-10 max-w-3xl">
              <ContactChips />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Бегущая строка с марками целевой аудитории */}
      <div className="relative border-t border-white/10 bg-ink/40 py-4 backdrop-blur-sm">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="flex shrink-0 animate-marquee items-center gap-12 pr-12">
            {[...carBrands, ...carBrands].map((b, i) => (
              <span
                key={`${b}-${i}`}
                className="whitespace-nowrap font-display text-sm tracking-[0.2em] text-white/30"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
