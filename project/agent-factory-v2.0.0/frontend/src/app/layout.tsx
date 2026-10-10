import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Agent Factory Control Tower',
  description: 'Manage and monitor AI agents',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
