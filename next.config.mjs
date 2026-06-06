/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      // Стоковые фото авто-интерьеров (Pexels, бесплатная лицензия) как временные.
      // Замените на реальные фото мастерской в /public и поменяйте URL в lib/site.ts —
      // этот блок тогда можно удалить.
      { protocol: 'https', hostname: 'images.pexels.com' },
    ],
  },
};

export default nextConfig;
