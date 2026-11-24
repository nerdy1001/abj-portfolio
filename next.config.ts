import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/resume.pdf",
        headers: [
          {
            key: "Content-Disposition",
            value: 'attachment; filename="Akere-Bryan-James-Nojang-Resume.pdf"',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
