import { Reveal } from '@/components/motion/Reveal';

interface Props {
  eyebrow: string;
  title: string;
  description?: string;
  index?: string;
  align?: 'left' | 'center';
  className?: string;
}

/** Единый заголовок секции: индекс + надпись-eyebrow + крупный serif-заголовок. */
export function SectionHeading({ eyebrow, title, description, index, align = 'left', className }: Props) {
  const centered = align === 'center';
  return (
    <Reveal
      className={[
        'flex flex-col gap-5',
        centered ? 'items-center text-center' : 'items-start',
        className ?? '',
      ].join(' ')}
    >
      <span className={['flex items-center gap-3.5', centered ? 'justify-center' : ''].join(' ')}>
        {index && (
          <span className="font-mono text-xs tracking-[0.2em] text-wine-soft">{index}</span>
        )}
        <span className="eyebrow">{eyebrow}</span>
      </span>
      <h2
        className={[
          'font-display text-[2.15rem] font-semibold leading-[1.1] text-white sm:text-4xl lg:text-5xl text-balance',
          centered ? 'max-w-3xl' : 'max-w-2xl',
        ].join(' ')}
      >
        {title}
      </h2>
      {description && (
        <p className={['text-base leading-relaxed text-white/55', centered ? 'max-w-xl' : 'max-w-xl'].join(' ')}>
          {description}
        </p>
      )}
    </Reveal>
  );
}
