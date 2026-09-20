import { next } from '@vercel/edge';

// Vercel Edge Middleware: password-gates the whole site with HTTP Basic Auth.
// The password lives in the SITE_PASSWORD environment variable (set in Vercel),
// never in this file, so it stays out of the public repo.
// If SITE_PASSWORD is unset, the site is served normally (no lockout).

export const config = {
  // Run on every request except Vercel internals.
  matcher: '/((?!_vercel).*)',
};

export default function middleware(request: Request) {
  const password = process.env.SITE_PASSWORD;
  if (!password) return next();

  const header = request.headers.get('authorization') ?? '';
  const [scheme, encoded] = header.split(' ');

  if (scheme === 'Basic' && encoded) {
    let decoded = '';
    try {
      decoded = atob(encoded);
    } catch {
      decoded = '';
    }
    // Accept any username; only the password must match.
    const supplied = decoded.slice(decoded.indexOf(':') + 1);
    if (supplied === password) return next();
  }

  return new Response('Authentication required.', {
    status: 401,
    headers: { 'WWW-Authenticate': 'Basic realm="Christine Ye — private"' },
  });
}
