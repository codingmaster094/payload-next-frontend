import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '192.168.1.9',
        port: '3000',
        pathname: '/api/media/file/**',
      },
    ],
  },
  experimental: {
    allowedDevOrigins: ['*'],
  },
  env: {
    NEXT_BASE_URL: 'https://payload-backend-20uj.onrender.com',
  },
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
