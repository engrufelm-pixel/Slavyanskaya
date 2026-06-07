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
        <div className="mt-10 lg:mt-14 lg:flex lg:items-stretch lg:gap-8">
          <Reveal className="lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div>
                <span className="flex items-center gap-3.5">
                  <span className="font-mono text-xs tracking-[0.2em] text-wine-soft">08</span>
                  <span className="eyebrow">Контакты</span>
                </span>
                <h2 className="mt-5 font-display text-[2.15rem] font-semibold leading-[1.1] text-white text-balance sm:text-4xl lg:text-5xl">
                  Запишитесь на консультацию
                </h2>
                <p className="mt-5 text-base leading-relaxed text-white/55">
                  Оставьте заявку или напишите напрямую — рассчитаем стоимость по вашему автомобилю.
                </p>
              </div>

              <div className="mt-7">
                <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl2 border border-white/10 bg-white/[0.04] sm:grid-cols-3">
                  {infoItems.map((it) => {
                    const inner = (
                      <>
                        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold/10 text-gold">
                          <Icon name={it.icon} size={20} weight="regular" />
                        </span>
                        <span className="mt-4 block text-xs uppercase tracking-wider text-white/40">
                          {it.label}
                        </span>
                        <span className="mt-1 block font-medium text-white">{it.value}</span>
                      </>
                    );
                    return it.href ? (
                      <a
                        key={it.label}
                        href={it.href}
                        target={it.external ? '_blank' : undefined}
                        rel={it.external ? 'noopener noreferrer' : undefined}
                        className="group bg-ink p-6 transition-colors hover:bg-charcoal/60"
                      >
                        {inner}
                      </a>
                    ) : (
                      <div key={it.label} className="bg-ink p-6">
                        {inner}
                      </div>
                    );
                  })}
                </div>

                <a
                  href={contacts.max}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline w-full mt-6"
                >
                  <MaxIcon className="h-5 w-5 rounded-[6px]" /> Написать в Max
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:w-7/12" delay={0.1}>
            <div className="h-full ml-4 lg:ml-8">
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
