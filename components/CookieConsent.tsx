'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Icon } from '@/components/Icon';

const KEY = 'cookie-consent';

/**
 * Уведомление об использовании cookie (152-ФЗ / общая практика).
 * Выбор сохраняется в localStorage. Сторонняя аналитика не подключается,
 * пока пользователь не нажмёт «Принять» — место под её инициализацию помечено.
 */
export function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setShow(true);
    } catch {
      /* localStorage недоступен — баннер просто не показываем */
    }
  }, []);

  function decide(value: 'all' | 'essential') {
    try {
      localStorage.setItem(KEY, value);
    } catch {
      /* ignore */
    }
    // if (value === 'all') { /* здесь инициализируйте Метрику/аналитику */ }
    setShow(false);
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          role="dialog"
          aria-label="Уведомление об использовании cookie"
          className="fixed inset-x-4 bottom-4 z-[49] mx-auto max-w-3xl rounded-2xl border border-white/10 bg-charcoal/95 p-5 shadow-lift backdrop-blur-xl sm:p-6"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                <Icon name="shield" size={18} weight="light" />
              </span>
              <p className="text-sm leading-relaxed text-white/65">
                Мы используем файлы cookie, чтобы сайт работал корректно и был удобнее. Продолжая
                пользоваться сайтом, вы соглашаетесь с этим. Подробнее — в{' '}
                <a href="/privacy" className="text-gold underline-offset-2 hover:underline">
                  Политике конфиденциальности
                </a>
                .
              </p>
            </div>
            <div className="flex shrink-0 gap-3">
              <button
                type="button"
                onClick={() => decide('essential')}
                className="btn-outline !px-4 !py-2.5 text-sm"
              >
                Только необходимые
              </button>
              <button
                type="button"
                onClick={() => decide('all')}
                className="btn-gold !px-5 !py-2.5 text-sm"
              >
                Принять
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
