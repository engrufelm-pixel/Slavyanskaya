/**
 * Иконка мессенджера MAX (max.ru) — воссоздание фирменного логотипа:
 * градиентный скруглённый квадрат с белым «чат-кольцом».
 * Чтобы поставить официальный ассет — замените SVG ниже на свой.
 * Без хуков: можно использовать и в серверных, и в клиентских компонентах.
 */
export function MaxIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} role="img" aria-label="Max">
      <defs>
        <linearGradient id="maxGrad" x1="16" y1="184" x2="184" y2="16" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#15B5FB" />
          <stop offset="0.5" stopColor="#3C66F0" />
          <stop offset="1" stopColor="#9A2FE0" />
        </linearGradient>
      </defs>
      <rect width="200" height="200" rx="46" fill="url(#maxGrad)" />
      <g fill="#fff">
        <circle cx="100" cy="93" r="61" />
        <path d="M64 146 L50 186 L98 156 Z" />
      </g>
      <circle cx="100" cy="93" r="33" fill="url(#maxGrad)" />
    </svg>
  );
}
