'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { Icon } from '@/components/Icon';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/motion/Reveal';
import { gallery } from '@/lib/site';

export function Gallery() {
  const [index, setIndex] = useState<number | null>(null);
  const isOpen = index !== null;

  const close = useCallback(() => setIndex(null), []);
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % gallery.length)),
    [],
  );
  const prev = useCallback(
    () => setIndex((i) => (i === null ? i : (i - 1 + gallery.length) % gallery.length)),
    [],
  );

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [isOpen, close, next, prev]);

  const active = index !== null ? gallery[index] : null;

  return (
    <section id="gallery" className="relative scroll-mt-24 bg-graphite py-24 lg:py-32">
      <div className="container-px">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            index="02"
            eyebrow="Портфолио"
            title="Работы мастерской"
            description="Раздел в наполнении: скоро здесь появятся реальные работы мастерской. Сейчас — временные фото-примеры."
          />
          <span className="self-start rounded-full border border-white/15 px-3 py-1 text-xs text-white/45 lg:mb-2">
            Фото-заглушки
          </span>
        </div>

        <Reveal className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:auto-rows-[15rem] lg:grid-flow-dense lg:grid-cols-4">
          {gallery.map((item, i) => (
            <button
              key={item.src}
              type="button"
              onClick={() => setIndex(i)}
              className={[
                'group relative aspect-[4/3] overflow-hidden rounded-xl2 border border-white/10 text-left lg:aspect-auto',
                item.wide ? 'lg:col-span-2' : '',
                item.tall ? 'lg:row-span-2' : '',
              ].join(' ')}
              aria-label="Пример работы — открыть фото"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover img-tone transition-transform duration-700 ease-premium group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent opacity-50 transition-opacity duration-500 group-hover:opacity-80" />

              <span className="absolute right-3 top-3 flex h-9 w-9 translate-y-1 items-center justify-center rounded-full border border-white/20 bg-ink/40 text-white opacity-0 backdrop-blur-sm transition-all duration-300 ease-premium group-hover:translate-y-0 group-hover:opacity-100">
                <Icon name="plus" size={16} weight="bold" />
              </span>
            </button>
          ))}
        </Reveal>
      </div>

      {/* Лайтбокс */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-md sm:p-8"
            onClick={close}
          >
            <button
              type="button"
              onClick={close}
              className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-gold hover:text-gold"
              aria-label="Закрыть"
            >
              <Icon name="x" size={22} weight="regular" />
            </button>

            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-gold hover:text-gold sm:left-6"
              aria-label="Предыдущее фото"
            >
              <Icon name="caret-left" size={22} weight="bold" />
            </button>
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-gold hover:text-gold sm:right-6"
              aria-label="Следующее фото"
            >
              <Icon name="caret-right" size={22} weight="bold" />
            </button>

            <motion.figure
              key={active.src}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex max-h-[85vh] w-full max-w-5xl flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl2 border border-white/10">
                <Image
                  src={active.src}
                  alt={active.alt}
                  fill
                  sizes="90vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-4 flex items-center justify-between">
                <span className="text-sm text-white/45">Пример · заменим на реальную работу</span>
                <span className="font-mono text-sm text-white/40">
                  {String((index ?? 0) + 1).padStart(2, '0')} / {String(gallery.length).padStart(2, '0')}
                </span>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
