import type { Metadata } from 'next';
import { Syne, JetBrains_Mono } from 'next/font/google';
import '../styles/globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import CustomCursor from '@/components/ui/CustomCursor';
import ScrollProgress from '@/components/ui/ScrollProgress';
import Navbar from '@/components/ui/Navbar';
import LoadingScreen from '@/components/ui/LoadingScreen';
import { Toaster } from 'react-hot-toast';
import TawkChat from '@/components/sections/TawkChat';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Ashish Sharma — Web Developer | React.js & Next.js Specialist',
  description:
    'Web Developer based in Mohali, Punjab. Specializing in React.js, Next.js, TypeScript, animations, and building high-performance web applications.',
  keywords: [
    'Ashish Sharma',
    'Web Developer',
    'React.js',
    'Next.js',
    'TypeScript',
    'Mohali',
    'Punjab',
    'Web Developer',
  ],
  authors: [{ name: 'Ashish Sharma', url: 'mailto:ashish.builds207@gmail.com' }],
  creator: 'Ashish Sharma',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ashishsharma.dev',
    title: 'Ashish Sharma — Web Developer',
    description: 'Building fast, scalable, and visually polished web experiences.',
    siteName: 'Ashish Sharma Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ashish Sharma — Web Developer',
    description: 'Building fast, scalable, and visually polished web experiences.',
  },
  robots: { index: true, follow: true },
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${syne.variable} ${jetbrains.variable} font-sans`}>
        <ThemeProvider>
          <LoadingScreen />
          <CustomCursor />
          <ScrollProgress />
          <Navbar />
          <main>{children}</main>
          <TawkChat />
          <WhatsAppButton/>
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 3000,
              style: {
                background: 'rgba(15, 15, 25, 0.9)',
                color: '#fff',
                border: '1px solid rgba(147,51,234,0.3)',
                backdropFilter: 'blur(12px)',
                borderRadius: '14px',
                padding: '14px 16px',
                fontSize: '14px',
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
