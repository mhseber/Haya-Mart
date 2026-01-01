/** @type {import('next').NextConfig} */
const nextConfig = {
   experimental: {
    // Google Fonts fetch issue fix for Turbopack
    serverWebFonts: false,
  },
  async redirects(){
    return [
      {
        source: '/products/add',
        destination: '/dashboard/products/add',
        permanent: true,
      },
    ]
  }
};

export default nextConfig;
