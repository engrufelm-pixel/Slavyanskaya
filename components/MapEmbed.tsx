import { Icon } from '@/components/Icon';
import { contacts } from '@/lib/site';

const routeUrl = `https://yandex.ru/maps/?mode=routes&rtext=~${encodeURIComponent(
  contacts.addressFull,
)}&rtt=auto`;

/** Интерактивная карта с меткой на адресе (iframe Yandex) */
export function MapEmbed() {
  const { lat, lng } = contacts.geo;
  const iframeSrc = `https://yandex.ru/map-widget/v1/?ll=${lng},${lat}&z=16&pt=${lng},${lat},pm2rdm`;

  return (
    <div className="relative h-full overflow-hidden rounded-xl2 border border-white/10">
      <iframe
        src={iframeSrc}
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
