"use client";

export default function GlobalError({
  error,
}: {
  error: Error;
}) {
  return (
    <html>
      <body style={{ padding: 20 }}>
        <h1 style={{ color: "red" }}>Server Component Error</h1>
        <pre>{error.message}</pre>
        <pre>{error.stack}</pre>
      </body>
    </html>
  );
}
