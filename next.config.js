// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: { unoptimized: true },
//     output:'export',
//     trailingSlash: true,
// }

// module.exports = nextConfig


/** @type {import('next').NextConfig} */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}
module.exports = nextConfig
