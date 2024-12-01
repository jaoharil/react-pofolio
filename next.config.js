/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [], // Tambahkan domain jika perlu (untuk gambar eksternal)
    unoptimized: true, // Izinkan gambar lokal di luar public
  },
};

module.exports = nextConfig;
