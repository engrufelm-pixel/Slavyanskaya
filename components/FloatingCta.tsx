'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Icon } from '@/components/Icon';
import { MaxIcon } from '@/components/MaxIcon';
import { contacts } from '@/lib/site';

export function FloatingCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Десктоп: плавающие кнопки справа */}
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 24 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-7 right-7 z-40 hidden flex-col gap-3 lg:flex"
          >
            <a
              href={contacts.max}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Написать в Max"
              className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl shadow-lift transition-transform duration-300 ease-premium hover:-translate-y-0.5"
            >
              <MaxIcon className="h-14 w-14" />
            </a>
            <a
              href={contacts.phoneHref}
              aria-label="Позвонить"
              className="flex h-14 w-14 items-center justify-center rounded-full bg-gold text-ink shadow-gold transition-transform duration-300 ease-premium hover:-translate-y-0.5"
            >
              <Icon name="phone" size={22} weight="fill" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Мобайл: нижняя панель действий */}
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-px border-t border-white/10 bg-ink/95 backdrop-blur-xl lg:hidden"
          >
            <a href={contacts.phoneHref} className="flex flex-col items-center gap-1 py-3 text-white">
              <Icon name="phone" size={20} weight="regular" className="text-gold" />
              <span className="text-[0.7rem]">Позвонить</span>
            </a>
            <a
              href={contacts.max}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1 border-l border-white/10 py-3 text-white"
            >
              <MaxIcon className="h-5 w-5 rounded-[5px]" />
              <span className="text-[0.7rem]">Max</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
