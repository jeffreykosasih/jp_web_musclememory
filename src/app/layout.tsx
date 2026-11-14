import type { Metadata, Viewport } from 'next';
import { Roboto_Flex } from 'next/font/google';
import SiteHeader from '@/components/SiteHeader';
import './globals.css';

const robotoFlex = Roboto_Flex({
  subsets: ['latin'],
  variable: '--font-roboto-flex',
  display: 'swap',
  axes: ['wdth', 'opsz'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://musclememory-jeffrey-kos-projects.vercel.app'),
  title: {
    default: 'Muscle Memory | Simple exercises for every muscle group',
    template: '%s | Muscle Memory',
  },
  description:
    'Clear, step-by-step exercises for abs, arms, back, cardio, chest, legs and shoulders. Most need no equipment.',
  authors: [{ name: 'Jeffrey Ko' }],
  openGraph: {
    title: 'Muscle Memory',
    description: 'Simple exercises for every muscle group.',
    images: ['/images/ui/backgrounds/background.jpg'],
    type: 'website',
  },
  icons: {
    icon: '/images/ui/logos/logo.png',
    apple: '/images/ui/logos/logo.png',
  },
};

export const viewport: Viewport = {
  themeColor: '#0b0b0c',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={robotoFlex.variable}>
      <body>
        <a
          href='#main'
          className='sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:font-semibold focus:text-black'
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id='main'>{children}</main>
        <footer className='border-t border-line'>
          <div className='mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-muted sm:flex-row sm:justify-between sm:px-6'>
            <p>Muscle Memory. Designed and built by Jeffrey Ko.</p>
            <p>Check with a professional before starting a new routine.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
