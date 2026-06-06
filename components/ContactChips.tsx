import { Icon } from '@/components/Icon';
import { MaxIcon } from '@/components/MaxIcon';
import { contacts } from '@/lib/site';

const routeUrl = `https://yandex.ru/maps/?mode=routes&rtext=~${encodeURIComponent(
  contacts.addressFull,
)}&rtt=auto`;

/**
 * Равные по ширине чипы в одну линию: Позвонить · Max · Адрес.
 * Телефон и адрес — золотая иконка, Max — фирменный логотип.
 */
export function ContactChips({ className }: { className?: string }) {
  return (
    <div className={['grid grid-cols-1 gap-3 sm:grid-cols-3', className ?? ''].join(' ')}>
      {/* Позвонить */}
      <a
        href={contacts.phoneHref}
        className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 transition-colors duration-300 hover:border-gold/50 hover:bg-white/[0.06]"
      >
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold transition-colors group-hover:bg-gold group-hover:text-ink">
          <Icon name="phone" size={18} weight="regular" />
        </span>
        <span className="flex min-w-0 flex-col leading-tight">
          <span className="text-[0.7rem] uppercase tracking-wider text-white/40">Позвонить</span>
          <span className="truncate text-sm font-medium text-white">{contacts.phoneDisplay}</span>
        </span>
      </a>

      {/* Max */}
      <a
        href={contacts.max}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 transition-colors duration-300 hover:border-gold/50 hover:bg-white/[0.06]"
      >
        <MaxIcon className="h-9 w-9 shrink-0 rounded-[10px]" />
        <span className="flex min-w-0 flex-col leading-tight">
          <span className="text-[0.7rem] uppercase tracking-wider text-white/40">Мессенджер</span>
          <span className="truncate text-sm font-medium text-white">Max</span>
        </span>
      </a>

      {/* Адрес */}
      <a
        href={routeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 transition-colors duration-300 hover:border-gold/50 hover:bg-white/[0.06]"
      >
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold transition-colors group-hover:bg-gold group-hover:text-ink">
          <Icon name="mappin" size={18} weight="regular" />
        </span>
        <span className="flex min-w-0 flex-col leading-tight">
          <span className="text-[0.7rem] uppercase tracking-wider text-white/40">Адрес</span>
          <span className="truncate text-sm font-medium text-white">{contacts.address}</span>
        </span>
      </a>
    </div>
  );
}
