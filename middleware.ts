// Vercel Edge Middleware: password-gates the whole site with HTTP Basic Auth.
// The password lives in the SITE_PASSWORD environment variable (set in Vercel),
// never in this file, so it stays out of the public repo.
// If SITE_PASSWORD is unset, the site is served normally (no lockout).
//
// Returning `undefined` lets the request continue to the static site; only a
// returned Response short-circuits it. (No @vercel/edge import — its next()
// helper fails on a static, adapter-less deployment.)

export const config = {
  // Run on every request except Vercel internals.
  matcher: '/((?!_vercel).*)',
};

export default function middleware(request: Request): Response | undefined {
  const password = process.env.SITE_PASSWORD;
  if (!password) return; // gate disabled — serve normally

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
    if (supplied === password) return; // correct password — serve normally
  }

  return new Response('Authentication required.', {
    status: 401,
    headers: { 'WWW-Authenticate': 'Basic realm="Christine Ye — private"' },
  });
}
