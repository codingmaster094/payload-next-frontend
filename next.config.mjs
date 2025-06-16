import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['payload-backend-nu.vercel.app'],
  },
  env: {
    NEXT_BASE_URL: 'https://payload-backend-nu.vercel.app',
  },
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
