import { Icon } from '@/components/Icon';
import { contacts } from '@/lib/site';

const mapSrc = `https://yandex.ru/map-widget/v1/?text=${encodeURIComponent(
  contacts.addressFull,
)}&z=16`;
const routeUrl = `https://yandex.ru/maps/?mode=routes&rtext=~${encodeURIComponent(
  contacts.addressFull,
)}&rtt=auto`;

/** Интерактивная карта Яндекс — показывается сразу. */
export function MapEmbed() {
  return (
    <div className="relative flex-1 overflow-hidden rounded-xl2 border border-white/10">
      <iframe
        src={mapSrc}
        title={`Карта: ${contacts.addressFull}`}
        loading="lazy"
        className="h-full min-h-[340px] w-full grayscale-[0.15]"
        style={{ border: 0 }}
        referrerPolicy="no-referrer-when-downgrade"
      />
      <a
        href={routeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-gold absolute bottom-4 right-4 z-10 !px-5 !py-3 text-[0.8rem] shadow-lift"
      >
        <Icon name="navigation" size={16} weight="fill" />
        Построить маршрут
      </a>
    </div>
  );
}
