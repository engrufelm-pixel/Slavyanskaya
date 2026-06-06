'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Icon } from '@/components/Icon';
import { MaxIcon } from '@/components/MaxIcon';
import { brand, contacts, nav } from '@/lib/site';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Блокируем прокрутку под открытым меню
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={[
        'fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-premium',
        scrolled
          ? 'border-b border-white/10 bg-ink/85 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent',
      ].join(' ')}
    >
      <div className="container-px flex h-[4.75rem] items-center justify-between gap-6">
        <a href="#top" className="group flex items-center gap-2" aria-label={brand.name}>
          <span className="font-display text-base font-semibold tracking-tight text-white sm:text-lg">
            {brand.name}
          </span>
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className="group relative text-sm text-white/65 transition-colors hover:text-white"
            >
              {n.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-300 ease-premium group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={contacts.phoneHref}
            className="text-sm font-medium text-white/80 transition-colors hover:text-gold"
          >
            {contacts.phoneDisplay}
          </a>
          <a href="#contacts" className="btn-gold !px-5 !py-2.5 text-[0.8rem]">
            Консультация
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white lg:hidden"
          aria-label="Открыть меню"
        >
          <Icon name="list" size={22} weight="regular" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex flex-col bg-ink/98 backdrop-blur-xl lg:hidden"
          >
            <div className="container-px flex h-[4.75rem] items-center justify-between">
              <span className="font-display text-lg font-semibold tracking-tight text-white">
                {brand.name}
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white"
                aria-label="Закрыть меню"
              >
                <Icon name="x" size={22} weight="regular" />
              </button>
            </div>

            <nav className="container-px mt-6 flex flex-1 flex-col gap-1">
              {nav.map((n, i) => (
                <motion.a
                  key={n.id}
                  href={`#${n.id}`}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05 }}
                  className="flex items-center justify-between border-b border-white/5 py-4 font-display text-2xl text-white/80"
                >
                  {n.label}
                  <Icon name="arrow-up-right" size={20} className="text-gold" />
                </motion.a>
              ))}
            </nav>

            <div className="container-px flex flex-col gap-3 pb-10">
              <a href={contacts.phoneHref} className="btn-gold w-full">
                <Icon name="phone" size={18} weight="regular" />
                {contacts.phoneDisplay}
              </a>
              <a
                href={contacts.max}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline w-full"
              >
                <MaxIcon className="h-5 w-5 rounded-[6px]" /> Написать в Max
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
