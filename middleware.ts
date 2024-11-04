import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing, {
  localeDetection: false
});

export const config = {
  matcher: [
    // 不要匹配这些路径
    '/((?!api|_next|_static|public|sitemap.xml|robots.txt|favicon.ico|apple-touch-icon.png|icon.png).*)',
    // 语言路由
    '/(en|zh|tw)/:path*'
  ]
};