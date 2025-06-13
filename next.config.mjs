import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['payload-backend-20uj.onrender.com'], 
  },
  experimental: {
    allowedDevOrigins: ['*'],
  },
  env: {
    NEXT_BASE_URL: 'https://payload-backend-20uj.onrender.com',
  },
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
