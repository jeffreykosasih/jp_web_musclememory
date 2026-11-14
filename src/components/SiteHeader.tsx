import Link from 'next/link';
import Image from 'next/image';

export default function SiteHeader() {
  return (
    <header className='sticky top-0 z-50 border-b border-line/70 bg-bg/80 backdrop-blur-md'>
      <div className='mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6'>
        <Link href='/' className='flex items-center gap-2.5' aria-label='Muscle Memory home'>
          <Image
            src='/images/ui/logos/logo.png'
            alt=''
            width={28}
            height={28}
            className='rounded-md'
          />
          <span className='display text-xl !leading-none'>Muscle Memory</span>
        </Link>
        <nav aria-label='Main' className='flex items-center gap-1 text-sm font-medium'>
          <Link
            href='/#groups'
            className='rounded-full px-4 py-2.5 text-muted transition-colors hover:text-fg'
          >
            Muscle groups
          </Link>
          <Link
            href='/#search'
            className='hidden rounded-full px-4 py-2.5 text-muted transition-colors hover:text-fg sm:block'
          >
            Search
          </Link>
        </nav>
      </div>
    </header>
  );
}
