// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//       domains: ['encrypted-tbn3.gstatic.com'],
//     },
//   };
  
//   export default nextConfig;
  



/** @type {import('next').NextConfig} */
const nextConfig = {

  images: {
    domains: [
      'ittech.ditsolution.net',
      'encrypted-tbn3.gstatic.com',
      'encrypted-tbn0.gstatic.com',
      'images.stockcake.com', 
      "images.unsplash.com",
      'img.freepik.com',
      'static2.bigstockphoto.com',
      'img.icons8.com',
      'cdn-icons-png.freepik.com',
      'png.pngtree.com',
      'your-image-host.com',
      'cdn3.vectorstock.com',
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.licdn.com",
        pathname: "/dms/image/**",
      },
      {
        protocol: "https",
        hostname: "ittech.ditsolution.net",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
