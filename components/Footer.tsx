import { Icon } from '@/components/Icon';
import { MaxIcon } from '@/components/MaxIcon';
import { brand, contacts, nav, services } from '@/lib/site';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-ink pb-28 pt-16 lg:pb-12 lg:pt-20">
      <div className="container-px">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Бренд */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2">
              <span className="font-display text-xl font-semibold tracking-tight text-white">
                {brand.name}
              </span>
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
            </div>
            <p className="mt-1 text-xs uppercase tracking-widest2 text-white/35">{brand.tagline}</p>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/45">
              Индивидуальный пошив, перетяжка и реставрация автомобильного интерьера. Премиальные
              материалы и ручная работа.
            </p>
          </div>

          {/* Навигация */}
          <div className="lg:col-span-2">
            <h3 className="text-xs uppercase tracking-wider text-white/40">Разделы</h3>
            <ul className="mt-5 flex flex-col gap-3">
              {nav.map((n) => (
                <li key={n.id}>
                  <a href={`#${n.id}`} className="text-sm text-white/60 transition-colors hover:text-gold">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Услуги */}
          <div className="lg:col-span-3">
            <h3 className="text-xs uppercase tracking-wider text-white/40">Услуги</h3>
            <ul className="mt-5 flex flex-col gap-3">
              {services.map((s) => (
                <li key={s.id}>
                  <a href="#services" className="text-sm text-white/60 transition-colors hover:text-gold">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Контакты */}
          <div className="lg:col-span-3">
            <h3 className="text-xs uppercase tracking-wider text-white/40">Контакты</h3>
            <ul className="mt-5 flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <Icon name="mappin" size={18} weight="regular" className="mt-0.5 shrink-0 text-gold" />
                <span className="text-sm text-white/60">{contacts.address}, {brand.city}</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="phone" size={18} weight="regular" className="mt-0.5 shrink-0 text-gold" />
                <a href={contacts.phoneHref} className="text-sm text-white/60 transition-colors hover:text-gold">
                  {contacts.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="clock" size={18} weight="regular" className="mt-0.5 shrink-0 text-gold" />
                <span className="text-sm text-white/60">{contacts.hours}</span>
              </li>
            </ul>
            <a
              href={contacts.max}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Написать в Max"
              className="mt-5 inline-flex items-center gap-2.5 rounded-full border border-white/15 px-4 py-2 text-sm text-white/70 transition-colors hover:border-gold hover:text-white"
            >
              <MaxIcon className="h-5 w-5 rounded-[6px]" />
              Написать в Max
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-white/35">
            © {year} {brand.name}. Все права защищены.
          </p>
          <a href="#top" className="group flex items-center gap-2 text-xs text-white/45 transition-colors hover:text-gold">
            Наверх
            <span className="flex h-7 w-7 rotate-[-45deg] items-center justify-center rounded-full border border-white/15 transition-colors group-hover:border-gold">
              <Icon name="arrow-right" size={13} weight="bold" className="-rotate-90" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
