'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Icon } from '@/components/Icon';
import { SectionHeading } from '@/components/SectionHeading';
import { reviews } from '@/lib/site';

const ease = [0.16, 1, 0.3, 1] as const;

const variants = {
  enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 64 : -64 }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -64 : 64 }),
};

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1" aria-label={`Оценка ${rating} из 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Icon
          key={i}
          name="star"
          size={18}
          weight={i < rating ? 'fill' : 'regular'}
          className={i < rating ? 'text-gold' : 'text-white/20'}
        />
      ))}
    </div>
  );
}

export function Reviews() {
  const [[index, dir], setState] = useState<[number, number]>([0, 0]);
  const review = reviews[index];

  const paginate = (d: number) =>
    setState(([i]) => [(i + d + reviews.length) % reviews.length, d]);

  const goTo = (target: number) =>
    setState(([i]) => [target, target > i ? 1 : -1]);

  return (
    <section id="reviews" className="relative scroll-mt-24 overflow-hidden bg-graphite py-24 lg:py-32">
      <div className="container-px">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading index="05" eyebrow="Отзывы" title="Что говорят владельцы" />
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => paginate(-1)}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-gold hover:text-gold"
              aria-label="Предыдущий отзыв"
            >
              <Icon name="caret-left" size={20} weight="bold" />
            </button>
            <button
              type="button"
              onClick={() => paginate(1)}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-gold hover:text-gold"
              aria-label="Следующий отзыв"
            >
              <Icon name="caret-right" size={20} weight="bold" />
            </button>
          </div>
        </div>

        <div className="relative mt-14 min-h-[20rem] sm:min-h-[16rem]">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.blockquote
              key={index}
              custom={dir}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, info) => {
                if (info.offset.x < -80) paginate(1);
                else if (info.offset.x > 80) paginate(-1);
              }}
              className="cursor-grab rounded-xl2 border border-white/10 bg-ink/60 p-8 active:cursor-grabbing sm:p-12"
            >
              <Icon name="quotes" size={40} weight="fill" className="text-gold/30" />
              <Stars rating={review.rating} />
              <p className="mt-5 max-w-3xl font-display text-xl leading-relaxed text-white/90 sm:text-2xl">
                {review.text}
              </p>
              <footer className="mt-8 flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 bg-gold/10 font-display text-lg text-gold">
                  {review.name.charAt(0)}
                </span>
                <div>
                  <p className="font-medium text-white">{review.name}</p>
                  <p className="text-sm text-gold">{review.car}</p>
                </div>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        {/* Точки */}
        <div className="mt-8 flex items-center gap-2.5">
          {reviews.map((r, i) => (
            <button
              key={r.name}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Отзыв ${i + 1}`}
              className={[
                'h-1.5 rounded-full transition-all duration-300 ease-premium',
                i === index ? 'w-8 bg-gold' : 'w-1.5 bg-white/20 hover:bg-white/40',
              ].join(' ')}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
