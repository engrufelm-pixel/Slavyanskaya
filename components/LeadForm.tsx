'use client';

import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@/components/Icon';
import { MaxIcon } from '@/components/MaxIcon';
import { contacts } from '@/lib/site';

type Status = 'idle' | 'submitting' | 'success' | 'error';
interface Errors {
  name?: string;
  phone?: string;
}

export function LeadForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [comment, setComment] = useState('');
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>('idle');

  function validate(): Errors {
    const next: Errors = {};
    if (name.trim().length < 2) next.name = 'Укажите, как к вам обращаться';
    const digits = phone.replace(/\D/g, '');
    if (digits.length < 10) next.phone = 'Введите корректный номер телефона';
    return next;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus('submitting');

    // Без бэкенда заявка не сохраняется на сервере. Чтобы получать заявки
    // (Max-бот / Telegram-бот / e-mail / CRM), подключите свой обработчик:
    //   await fetch('/api/lead', { method: 'POST', body: JSON.stringify({ name, phone, comment }) })
    // Сейчас открываем мессенджер Max; мастер перезвонит по указанному номеру.
    try {
      window.open(contacts.max, '_blank', 'noopener,noreferrer');
    } catch {
      /* всплывающее окно заблокировано — не критично */
    }
    window.setTimeout(() => setStatus('success'), 400);
  }

  function reset() {
    setName('');
    setPhone('');
    setComment('');
    setErrors({});
    setStatus('idle');
  }

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-start gap-5 rounded-xl2 border border-gold/30 bg-gold/[0.06] p-8 sm:p-10"
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold text-ink">
          <Icon name="check" size={28} weight="bold" />
        </span>
        <div>
          <h3 className="font-display text-2xl text-white">Заявка принята</h3>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/55">
            Перезвоним по номеру {phone || 'из заявки'} и рассчитаем стоимость. Можно сразу
            написать мастеру в Max.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href={contacts.max} target="_blank" rel="noopener noreferrer" className="btn-outline">
            <MaxIcon className="h-5 w-5 rounded-[6px]" /> Написать в Max
          </a>
          <button type="button" onClick={reset} className="btn-ghost">
            Отправить ещё заявку
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <label htmlFor="lead-name" className="text-sm font-medium text-white/75">
          Имя
        </label>
        <input
          id="lead-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Как к вам обращаться"
          autoComplete="name"
          aria-invalid={!!errors.name}
          className={[
            'w-full rounded-xl border bg-white/[0.03] px-4 py-3.5 text-white placeholder:text-white/30 transition-colors duration-300 focus:bg-white/[0.05] focus:outline-none',
            errors.name ? 'border-rose-400/60' : 'border-white/10 focus:border-gold/60',
          ].join(' ')}
        />
        {errors.name && <span className="text-xs text-rose-400">{errors.name}</span>}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="lead-phone" className="text-sm font-medium text-white/75">
          Телефон
        </label>
        <input
          id="lead-phone"
          type="tel"
          inputMode="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="+7 (___) ___-__-__"
          autoComplete="tel"
          aria-invalid={!!errors.phone}
          className={[
            'w-full rounded-xl border bg-white/[0.03] px-4 py-3.5 text-white placeholder:text-white/30 transition-colors duration-300 focus:bg-white/[0.05] focus:outline-none',
            errors.phone ? 'border-rose-400/60' : 'border-white/10 focus:border-gold/60',
          ].join(' ')}
        />
        {errors.phone && <span className="text-xs text-rose-400">{errors.phone}</span>}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="lead-comment" className="text-sm font-medium text-white/75">
          Комментарий <span className="text-white/35">— необязательно</span>
        </label>
        <textarea
          id="lead-comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Автомобиль, задача, пожелания по материалам"
          rows={4}
          className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-white placeholder:text-white/30 transition-colors duration-300 focus:border-gold/60 focus:bg-white/[0.05] focus:outline-none"
        />
      </div>

      <button type="submit" disabled={status === 'submitting'} className="btn-gold mt-1 w-full">
        {status === 'submitting' ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-ink/30 border-t-ink" />
            Отправляем…
          </>
        ) : (
          <>
            Получить расчёт стоимости
            <Icon name="arrow-right" size={18} weight="bold" />
          </>
        )}
      </button>

      <p className="text-xs leading-relaxed text-white/35">
        Нажимая кнопку, вы соглашаетесь на обработку персональных данных. Мы не передаём
        данные третьим лицам.
      </p>
    </form>
  );
}
