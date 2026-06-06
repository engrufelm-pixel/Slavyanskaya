'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Icon } from '@/components/Icon';
import { MaxIcon } from '@/components/MaxIcon';
import { contacts, faq } from '@/lib/site';

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative scroll-mt-24 bg-ink py-24 lg:py-32">
      <div className="container-px grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <span className="flex items-center gap-3.5">
            <span className="font-mono text-xs tracking-[0.2em] text-wine-soft">07</span>
            <span className="eyebrow">Вопросы</span>
          </span>
          <h2 className="mt-5 font-display text-[2.15rem] font-semibold leading-[1.1] text-white sm:text-4xl">
            Отвечаем на частые вопросы
          </h2>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/50">
            Не нашли ответ? Напишите нам — ответим по вашему автомобилю предметно.
          </p>
          <a
            href={contacts.max}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline mt-7"
          >
            <MaxIcon className="h-5 w-5 rounded-[6px]" />
            Задать вопрос
          </a>
        </div>

        <div className="lg:col-span-8">
          <div className="border-t border-white/10">
            {faq.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={item.q} className="border-b border-white/10">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-lg text-white sm:text-xl">{item.q}</span>
                    <span
                      className={[
                        'flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors duration-300',
                        isOpen ? 'border-gold bg-gold text-ink' : 'border-white/20 text-white',
                      ].join(' ')}
                    >
                      <Icon name={isOpen ? 'minus' : 'plus'} size={16} weight="bold" />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-2xl pb-6 pr-12 text-[0.95rem] leading-relaxed text-white/55">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
