import Link from 'next/link';
import { groups } from '@/lib/exercises';

/** Sticky row of muscle groups so people can switch without going back home. */
export default function GroupNav({ current }: { current: string }) {
  return (
    <nav
      aria-label='Muscle groups'
      className='sticky top-16 z-40 border-b border-line/70 bg-bg/85 backdrop-blur-md'
    >
      <ul className='no-scrollbar mx-auto flex max-w-6xl gap-2 overflow-x-auto px-4 py-3 sm:px-6'>
        {groups.map((g) => {
          const active = g.slug === current;
          return (
            <li key={g.slug} className='shrink-0'>
              <Link
                href={`/${g.slug}`}
                aria-current={active ? 'page' : undefined}
                className={`inline-flex min-h-10 items-center rounded-full px-4 text-sm font-semibold transition-colors ${
                  active
                    ? 'bg-accent text-black'
                    : 'border border-line text-muted hover:border-fg/40 hover:text-fg'
                }`}
              >
                {g.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
