import { Icon } from '@/components/Icon';
import { Reveal } from '@/components/motion/Reveal';
import { MapEmbed } from '@/components/MapEmbed';
import { MaxIcon } from '@/components/MaxIcon';
import { brand, contacts } from '@/lib/site';

const routeUrl = `https://yandex.ru/maps/?mode=routes&rtext=~${encodeURIComponent(
  contacts.addressFull,
)}&rtt=auto`;

const infoItems = [
  { icon: 'mappin' as const, label: 'Адрес', value: contacts.address, href: routeUrl, external: true },
  { icon: 'phone' as const, label: 'Телефон', value: contacts.phoneDisplay, href: contacts.phoneHref, external: false },
  { icon: 'clock' as const, label: 'Часы работы', value: contacts.hours, href: undefined, external: false },
];

export function Contacts() {
  return (
    <section id="contacts" className="relative scroll-mt-24 bg-graphite py-24 lg:py-32">
      <div className="container-px">
        <div className="max-w-2xl">
          <span className="flex items-center gap-3.5">
            <span className="font-mono text-xs tracking-[0.2em] text-wine-soft">08</span>
            <span className="eyebrow">Контакты</span>
          </span>
          <h2 className="mt-5 font-display text-[2.15rem] font-semibold leading-[1.1] text-white text-balance sm:text-4xl lg:text-5xl">
            Свяжитесь с нами
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/55">
            Позвоните или напишите в Max — рассчитаем стоимость по вашему автомобилю. Консультация
            бесплатная.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
          {/* Левая колонка: контакты + кнопки */}
          <Reveal className="lg:col-span-5">
            <div className="flex h-full flex-col gap-6">
              <div className="divide-y divide-white/10 overflow-hidden rounded-xl2 border border-white/10 bg-white/[0.04]">
                {infoItems.map((it) => {
                  const inner = (
                    <div className="flex items-center gap-4 p-5">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                        <Icon name={it.icon} size={20} weight="regular" />
                      </span>
                      <span className="flex flex-col leading-tight">
                        <span className="text-xs uppercase tracking-wider text-white/40">{it.label}</span>
                        <span className="mt-0.5 font-medium text-white">{it.value}</span>
                      </span>
                    </div>
                  );
                  return it.href ? (
                    <a
                      key={it.label}
                      href={it.href}
                      target={it.external ? '_blank' : undefined}
                      rel={it.external ? 'noopener noreferrer' : undefined}
                      className="block transition-colors hover:bg-charcoal/50"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div key={it.label}>{inner}</div>
                  );
                })}
              </div>

              <div className="flex flex-col gap-3">
                <a href={contacts.phoneHref} className="btn-gold w-full">
                  <Icon name="phone" size={18} weight="fill" />
                  Позвонить {contacts.phoneDisplay}
                </a>
                <a href={contacts.max} target="_blank" rel="noopener noreferrer" className="btn-outline w-full">
                  <MaxIcon className="h-5 w-5 rounded-[6px]" /> Написать в Max
                </a>
              </div>
            </div>
          </Reveal>

          {/* Правая колонка: карта */}
          <Reveal className="lg:col-span-7" delay={0.1}>
            <div className="flex h-full min-h-[360px] flex-col">
              <MapEmbed />
            </div>
          </Reveal>
        </div>

        <p className="mt-10 text-center text-xs text-white/30">
          {brand.name} — {brand.tagline}. {contacts.addressFull}
        </p>
      </div>
    </section>
  );
}
