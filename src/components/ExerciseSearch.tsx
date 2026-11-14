'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { Search } from 'lucide-react';
import { groups } from '@/lib/exercises';

const index = groups.flatMap((g) =>
  g.exercises.map((e) => ({ ...e, group: g.name, groupSlug: g.slug }))
);

export default function ExerciseSearch() {
  const [q, setQ] = useState('');
  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return [];
    return index.filter(
      (e) =>
        e.name.toLowerCase().includes(term) ||
        e.group.toLowerCase().includes(term) ||
        e.equipment.toLowerCase().includes(term)
    );
  }, [q]);

  return (
    <div className='mt-8'>
      <label htmlFor='exercise-search' className='sr-only'>
        Search exercises
      </label>
      <div className='relative'>
        <Search
          size={20}
          aria-hidden
          className='pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-muted'
        />
        <input
          id='exercise-search'
          type='search'
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder='Try “push-ups”, “dumbbells” or “legs”'
          autoComplete='off'
          className='h-14 w-full rounded-full border border-line bg-surface pl-14 pr-5 text-base text-fg placeholder:text-muted/70 focus:border-accent focus:outline-none'
        />
      </div>

      <p aria-live='polite' className='mt-4 text-sm text-muted'>
        {q.trim() && `${results.length} result${results.length === 1 ? '' : 's'}`}
      </p>

      {results.length > 0 && (
        <ul className='mt-2 divide-y divide-line overflow-hidden rounded-2xl border border-line bg-surface'>
          {results.map((r) => (
            <li key={`${r.groupSlug}-${r.slug}`}>
              <Link
                href={`/${r.groupSlug}#${r.slug}`}
                className='flex items-center justify-between gap-4 px-5 py-4 transition-colors hover:bg-surface-2'
              >
                <span>
                  <span className='font-semibold'>{r.name}</span>
                  <span className='mt-0.5 block text-sm text-muted'>
                    {r.prescription}
                    {r.equipment !== 'None' && ` · ${r.equipment}`}
                  </span>
                </span>
                <span className='shrink-0 rounded-full border border-line px-3 py-1 text-xs font-medium text-muted'>
                  {r.group}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
