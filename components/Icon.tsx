'use client';

/**
 * Единая точка для иконок Phosphor.
 * Phosphor использует React Context, поэтому импорт иконок напрямую в Server
 * Component вызывает ошибку createContext. Этот клиентский модуль решает проблему:
 * серверные секции рендерят <Icon /> как обычный клиентский лист.
 */

import {
  Crosshair,
  Diamond,
  Scissors,
  ShieldCheck,
  Armchair,
  Handbag,
  Sparkle,
  Phone,
  WhatsappLogo,
  TelegramLogo,
  MapPin,
  Clock,
  EnvelopeSimple,
  ArrowRight,
  ArrowUpRight,
  CaretLeft,
  CaretRight,
  CaretDown,
  Plus,
  Minus,
  X,
  List,
  Quotes,
  Star,
  NavigationArrow,
  Check,
  type Icon as PhosphorIcon,
} from '@phosphor-icons/react';

export type IconKey =
  | 'crosshair'
  | 'diamond'
  | 'scissors'
  | 'shield'
  | 'armchair'
  | 'bag'
  | 'sparkle'
  | 'phone'
  | 'whatsapp'
  | 'telegram'
  | 'mappin'
  | 'clock'
  | 'envelope'
  | 'arrow-right'
  | 'arrow-up-right'
  | 'caret-left'
  | 'caret-right'
  | 'caret-down'
  | 'plus'
  | 'minus'
  | 'x'
  | 'list'
  | 'quotes'
  | 'star'
  | 'navigation'
  | 'check';

const MAP: Record<IconKey, PhosphorIcon> = {
  crosshair: Crosshair,
  diamond: Diamond,
  scissors: Scissors,
  shield: ShieldCheck,
  armchair: Armchair,
  bag: Handbag,
  sparkle: Sparkle,
  phone: Phone,
  whatsapp: WhatsappLogo,
  telegram: TelegramLogo,
  mappin: MapPin,
  clock: Clock,
  envelope: EnvelopeSimple,
  'arrow-right': ArrowRight,
  'arrow-up-right': ArrowUpRight,
  'caret-left': CaretLeft,
  'caret-right': CaretRight,
  'caret-down': CaretDown,
  plus: Plus,
  minus: Minus,
  x: X,
  list: List,
  quotes: Quotes,
  star: Star,
  navigation: NavigationArrow,
  check: Check,
};

interface IconProps {
  name: IconKey;
  className?: string;
  size?: number;
  weight?: 'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone';
}

export function Icon({ name, className, size = 24, weight = 'light' }: IconProps) {
  const Cmp = MAP[name];
  return <Cmp className={className} size={size} weight={weight} aria-hidden />;
}
