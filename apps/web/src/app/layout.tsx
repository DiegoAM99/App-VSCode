import type { Metadata } from 'next';
import './globals.css';
import { Providers } from './providers';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'OmniConvert - Universal File Conversion Platform',
  description: 'Convert documents, images, audio, and video files with intelligent format detection.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased flex flex-col min-h-screen">
        <Providers>
          <main className="flex-grow">{children}</main>
        </Providers>
        <Footer />
      </body>
    </html>
  );
}
