'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { Icon } from '@/components/Icon';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/motion/Reveal';
import { gallery, type GalleryItem } from '@/lib/site';

type Tab = 'auto' | 'other' | 'all';

const autoCount = gallery.filter((g) => g.category === 'auto').length;
const otherCount = gallery.filter((g) => g.category === 'other').length;

const tabs: { key: Tab; label: string; n: number }[] = [
  { key: 'auto', label: 'Авто', n: autoCount },
  { key: 'other', label: 'Другое', n: otherCount },
  { key: 'all', label: 'Все', n: gallery.length },
];

export function Gallery() {
  const [tab, setTab] = useState<Tab>('auto');
  const [index, setIndex] = useState<number | null>(null);
  const isOpen = index !== null;

  const items: GalleryItem[] = useMemo(
    () => (tab === 'all' ? gallery : gallery.filter((g) => g.category === tab)),
    [tab],
  );

  const close = useCallback(() => setIndex(null), []);
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % items.length)),
    [items.length],
  );
  const prev = useCallback(
    () => setIndex((i) => (i === null ? i : (i - 1 + items.length) % items.length)),
    [items.length],
  );

  function changeTab(key: Tab) {
    setIndex(null);
    setTab(key);
  }

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

  const active = index !== null ? items[index] : null;

  return (
    <section id="gallery" className="relative scroll-mt-24 bg-graphite py-24 lg:py-32">
      <div className="container-px">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            index="02"
            eyebrow="Портфолио"
            title="Работы мастерской"
            description="Реальные работы: перетяжка салонов, пошив чехлов, кожаные изделия и реставрация. Нажмите на фото, чтобы увеличить."
          />
          <span className="self-start rounded-full border border-white/15 px-3 py-1 text-xs text-white/45 lg:mb-2">
            {gallery.length} работ
          </span>
        </div>

        {/* Вкладки-фильтр */}
        <Reveal className="mt-10 flex flex-wrap gap-2">
          {tabs.map((t) => {
            const activeTab = t.key === tab;
            return (
              <button
                key={t.key}
                type="button"
                onClick={() => changeTab(t.key)}
                aria-pressed={activeTab}
                className={[
                  'inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-colors duration-300 ease-premium',
                  activeTab
                    ? 'border-gold bg-gold text-ink'
                    : 'border-white/15 text-white/65 hover:border-white/35 hover:text-white',
                ].join(' ')}
              >
                {t.label}
                <span className={['font-mono text-xs', activeTab ? 'text-ink/60' : 'text-white/35'].join(' ')}>
                  {t.n}
                </span>
              </button>
            );
          })}
        </Reveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:auto-rows-[15rem] lg:grid-flow-dense lg:grid-cols-4"
          >
            {items.map((item, i) => (
              <button
                key={item.src}
                type="button"
                onClick={() => setIndex(i)}
                className={[
                  'group relative aspect-[4/3] overflow-hidden rounded-xl2 border border-white/10 text-left lg:aspect-auto',
                  item.wide ? 'lg:col-span-2' : '',
                  item.tall ? 'lg:row-span-2' : '',
                ].join(' ')}
                aria-label={`${item.car} — открыть фото`}
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
          </motion.div>
        </AnimatePresence>
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
                <Image src={active.src} alt={active.alt} fill sizes="90vw" className="object-cover" />
              </div>
              <figcaption className="mt-4 flex items-center justify-between gap-4">
                <span className="min-w-0">
                  <span className="block text-xs uppercase tracking-wider text-gold">{active.work}</span>
                  <span className="block truncate text-sm text-white">{active.car}</span>
                </span>
                <span className="shrink-0 font-mono text-sm text-white/40">
                  {String((index ?? 0) + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
                </span>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
