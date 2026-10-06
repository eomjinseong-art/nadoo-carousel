import type { NextConfig } from "next";

// 데스크는 화면 대신 쿠팡 링크로 바로 보냅니다 (lib/shared.ts 의 DESK_URL 과 같은 주소).
const DESK_URL = "https://link.coupang.com/a/hsdzLh1vB6";

const nextConfig: NextConfig = {
  async redirects() {
    return [{ source: "/desk/:path*", destination: DESK_URL, permanent: false }];
  },
};

export default nextConfig;
