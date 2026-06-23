import type { Metadata } from 'next';
import { brand, contacts } from '@/lib/site';

export const metadata: Metadata = {
  title: `Политика конфиденциальности | ${brand.name}`,
  description:
    'Политика в отношении обработки персональных данных и использования файлов cookie на сайте автоателье «Славянская мастерская».',
  alternates: { canonical: '/privacy' },
};

const sections: { h: string; body: React.ReactNode }[] = [
  {
    h: '1. Общие положения',
    body: (
      <p>
        Настоящая Политика определяет порядок обработки и защиты персональных данных физических лиц
        (далее — Пользователи), пользующихся сайтом автоателье «{brand.name}» (далее — Сайт).
        Оператором персональных данных выступает автоателье «{brand.name}» (контактные данные — в
        разделе «Контакты оператора»). Использование Сайта означает согласие Пользователя с настоящей
        Политикой.
      </p>
    ),
  },
  {
    h: '2. Какие данные обрабатываются',
    body: (
      <>
        <p>Оператор может обрабатывать следующие данные:</p>
        <ul>
          <li>имя и контактный телефон — когда вы звоните или пишете нам в мессенджере;</li>
          <li>
            технические данные, автоматически собираемые при посещении: IP-адрес, тип устройства и
            браузера, источник перехода, файлы cookie, данные систем веб-аналитики.
          </li>
        </ul>
        <p>
          Сайт не содержит формы сбора данных — заявки оставляются по телефону или в мессенджере, то
          есть в привычных вам сервисах.
        </p>
      </>
    ),
  },
  {
    h: '3. Цели обработки',
    body: (
      <ul>
        <li>связь с вами по вашему обращению и расчёт стоимости услуг;</li>
        <li>обеспечение работы Сайта, его безопасности и удобства;</li>
        <li>анализ посещаемости и улучшение Сайта (в обезличенном виде).</li>
      </ul>
    ),
  },
  {
    h: '4. Правовые основания',
    body: (
      <p>
        Обработка осуществляется на основании Федерального закона от 27.07.2006 № 152-ФЗ «О
        персональных данных», согласия Пользователя, а также в целях исполнения договора или принятия
        мер по обращению Пользователя.
      </p>
    ),
  },
  {
    h: '5. Файлы cookie',
    body: (
      <p>
        Сайт использует файлы cookie для корректной работы и анализа посещаемости. Вы можете отключить
        cookie в настройках браузера, однако это может повлиять на работу отдельных функций Сайта.
        Управлять согласием можно через всплывающее уведомление при первом посещении.
      </p>
    ),
  },
  {
    h: '6. Передача данных третьим лицам',
    body: (
      <p>
        Оператор не передаёт персональные данные третьим лицам, за исключением случаев, предусмотренных
        законодательством РФ. Технические данные могут обрабатываться поставщиками сервисов
        веб-аналитики и хостинга в обезличенном виде.
      </p>
    ),
  },
  {
    h: '7. Сроки хранения',
    body: (
      <p>
        Персональные данные хранятся не дольше, чем этого требуют цели обработки, либо до отзыва
        согласия Пользователем, если иное не предусмотрено законодательством.
      </p>
    ),
  },
  {
    h: '8. Права Пользователя',
    body: (
      <p>
        Вы вправе получить информацию об обработке ваших данных, потребовать их уточнения,
        блокирования или удаления, а также отозвать согласие на обработку, направив обращение по
        контактам, указанным ниже.
      </p>
    ),
  },
  {
    h: '9. Защита данных',
    body: (
      <p>
        Оператор принимает необходимые организационные и технические меры для защиты персональных
        данных от неправомерного доступа, изменения, раскрытия или уничтожения.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-[100dvh] bg-ink">
      {/* Верхняя панель */}
      <header className="border-b border-white/10">
        <div className="container-px flex h-[4.75rem] items-center justify-between">
          <a href="/" className="flex items-center gap-2" aria-label={brand.name}>
            <span className="font-display text-base font-semibold tracking-tight text-white sm:text-lg">
              {brand.name}
            </span>
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
          </a>
          <a href="/" className="text-sm text-white/60 transition-colors hover:text-gold">
            ← На главную
          </a>
        </div>
      </header>

      <main className="container-px py-16 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <span className="eyebrow">Правовая информация</span>
          <h1 className="mt-5 font-display text-[2.15rem] font-semibold leading-[1.1] text-white sm:text-4xl lg:text-5xl">
            Политика конфиденциальности
          </h1>
          <p className="mt-4 text-sm text-white/40">
            Политика в отношении обработки персональных данных и использования файлов cookie.
          </p>

          <div className="mt-10 flex flex-col gap-8">
            {sections.map((s) => (
              <section key={s.h}>
                <h2 className="font-display text-lg font-semibold text-white sm:text-xl">{s.h}</h2>
                <div className="mt-3 space-y-3 text-[0.95rem] leading-relaxed text-white/60 [&_a]:text-gold [&_li]:relative [&_li]:pl-5 [&_ul]:space-y-2 [&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:text-gold [&_li]:before:content-['—']">
                  {s.body}
                </div>
              </section>
            ))}

            {/* Контакты оператора */}
            <section>
              <h2 className="font-display text-lg font-semibold text-white sm:text-xl">
                10. Контакты оператора
              </h2>
              <div className="mt-3 space-y-1.5 text-[0.95rem] leading-relaxed text-white/60">
                <p>Автоателье «{brand.name}», {brand.city}</p>
                <p>Адрес: {contacts.addressFull}</p>
                <p>
                  Телефон:{' '}
                  <a href={contacts.phoneHref} className="text-gold">
                    {contacts.phoneDisplay}
                  </a>
                </p>
                <p>
                  E-mail:{' '}
                  <a href={`mailto:${contacts.email}`} className="text-gold">
                    {contacts.email}
                  </a>
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-white sm:text-xl">
                11. Изменения политики
              </h2>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-white/60">
                Оператор вправе изменять настоящую Политику. Актуальная редакция всегда размещена на
                этой странице. Дата последнего обновления: июнь 2026 г.
              </p>
            </section>
          </div>
        </div>
      </main>

      <footer className="border-t border-white/10">
        <div className="container-px flex flex-col items-start justify-between gap-2 py-6 text-xs text-white/35 sm:flex-row sm:items-center">
          <span>
            © {new Date().getFullYear()} {brand.name}. {contacts.addressFull}
          </span>
          <a href="/" className="transition-colors hover:text-gold">
            На главную
          </a>
        </div>
      </footer>
    </div>
  );
}
