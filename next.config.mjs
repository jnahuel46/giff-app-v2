/** @type {import('next').NextConfig} */
const generateRemotePatterns = (domains) => {
  return domains.map((domain) => ({
    protocol: 'https',
    hostname: domain,
    port: '',
    pathname: '/**',
  }));
};

const domains = [
  'media0.giphy.com',
  'media1.giphy.com',
  'media2.giphy.com',
  'media3.giphy.com',
  'media4.giphy.com',
];

const nextConfig = {
  images: {
    remotePatterns: generateRemotePatterns(domains),
  },
};

export default nextConfig;
