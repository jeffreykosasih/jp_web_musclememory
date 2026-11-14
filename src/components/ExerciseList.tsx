'use client';

import { useEffect, useState } from 'react';
import { Check, Dumbbell, RotateCcw, Timer } from 'lucide-react';
import { isBodyweight, type MuscleGroup } from '@/lib/exercises';

type Filter = 'all' | 'bodyweight' | 'equipment';

const filters: { id: Filter; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'bodyweight', label: 'No equipment' },
  { id: 'equipment', label: 'With equipment' },
];

const storageKey = (slug: string) => `mm-done-${slug}`;
const today = () => new Date().toDateString();

export default function ExerciseList({ group }: { group: MuscleGroup }) {
  const [filter, setFilter] = useState<Filter>('all');
  const [done, setDone] = useState<string[]>([]);

  // Remember today's ticked-off exercises in this browser (best effort; resets each day).
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey(group.slug)) || 'null');
      if (saved?.date === today()) setDone(saved.done);
    } catch {}
  }, [group.slug]);

  const save = (next: string[]) => {
    setDone(next);
    try {
      localStorage.setItem(storageKey(group.slug), JSON.stringify({ date: today(), done: next }));
    } catch {}
  };

  const toggle = (slug: string) =>
    save(done.includes(slug) ? done.filter((s) => s !== slug) : [...done, slug]);

  const visible = group.exercises.filter((e) =>
    filter === 'all' ? true : filter === 'bodyweight' ? isBodyweight(e) : !isBodyweight(e)
  );
  const total = group.exercises.length;
  const pct = Math.round((done.length / total) * 100);

  return (
    <>
      <div className='flex flex-col gap-4 border-y border-line py-4 sm:flex-row sm:items-center sm:justify-between'>
        <div role='group' aria-label='Filter exercises' className='flex flex-wrap gap-2'>
          {filters.map((f) => (
            <button
              key={f.id}
              type='button'
              aria-pressed={filter === f.id}
              onClick={() => setFilter(f.id)}
              className={`min-h-10 rounded-full px-4 text-sm font-semibold transition-colors ${
                filter === f.id
                  ? 'bg-fg text-bg'
                  : 'border border-line text-muted hover:text-fg'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className='flex items-center gap-4'>
          <div className='flex-1 sm:w-48 sm:flex-none'>
            <div className='flex justify-between text-xs text-muted'>
              <span>Today&rsquo;s progress</span>
              <span aria-live='polite'>
                {done.length}/{total} done
              </span>
            </div>
            <div
              className='mt-1.5 h-1.5 overflow-hidden rounded-full bg-surface-2'
              role='progressbar'
              aria-label='Exercises completed'
              aria-valuenow={done.length}
              aria-valuemin={0}
              aria-valuemax={total}
            >
              <div
                className='h-full rounded-full bg-accent transition-[width] duration-500'
                style={{ width: `${pct}%` }}
              />
            </div>
          </div>
          {done.length > 0 && (
            <button
              type='button'
              onClick={() => save([])}
              className='inline-flex min-h-10 items-center gap-1.5 text-sm text-muted hover:text-fg'
            >
              <RotateCcw size={14} aria-hidden /> Reset
            </button>
          )}
        </div>
      </div>

      {visible.length === 0 ? (
        <p className='mt-8 rounded-2xl border border-dashed border-line p-8 text-center text-muted'>
          No exercises match this filter.
        </p>
      ) : (
        <ol className='mt-6 grid gap-4 md:grid-cols-2'>
          {visible.map((e) => {
            const isDone = done.includes(e.slug);
            const isTimed = /second|minute/i.test(e.prescription);
            return (
              <li
                key={e.slug}
                id={e.slug}
                className={`flex flex-col rounded-2xl border p-6 transition-colors target:border-accent ${
                  isDone ? 'border-accent/40 bg-accent/[0.04]' : 'border-line bg-surface'
                }`}
              >
                <div className='flex items-start justify-between gap-4'>
                  <h3 className={`text-2xl font-bold ${isDone ? 'text-fg/60 line-through decoration-accent decoration-2' : ''}`}>
                    {e.name}
                  </h3>
                  <button
                    type='button'
                    onClick={() => toggle(e.slug)}
                    aria-pressed={isDone}
                    aria-label={`Mark ${e.name} as done`}
                    className={`grid size-11 shrink-0 place-items-center rounded-full border-2 transition-colors ${
                      isDone
                        ? 'border-accent bg-accent text-black'
                        : 'border-line text-transparent hover:border-accent hover:text-accent/50'
                    }`}
                  >
                    <Check size={20} strokeWidth={3} aria-hidden />
                  </button>
                </div>

                <ul className='mt-3 flex flex-wrap gap-2 text-sm' aria-label='Details'>
                  <li className='inline-flex items-center gap-1.5 rounded-full bg-surface-2 px-3 py-1.5 font-medium'>
                    {isTimed ? (
                      <Timer size={14} className='text-accent' aria-hidden />
                    ) : (
                      <RotateCcw size={14} className='text-accent' aria-hidden />
                    )}
                    {e.prescription}
                  </li>
                  <li className='inline-flex items-center gap-1.5 rounded-full bg-surface-2 px-3 py-1.5 text-muted'>
                    <Dumbbell size={14} aria-hidden />
                    {isBodyweight(e) ? 'No equipment' : e.equipment}
                  </li>
                </ul>

                <ol className='mt-5 space-y-3'>
                  {e.steps.map((step, idx) => (
                    <li key={idx} className='flex gap-3 leading-relaxed text-fg/80'>
                      <span className='mt-0.5 grid size-6 shrink-0 place-items-center rounded-full border border-line text-xs font-semibold text-muted'>
                        {idx + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </li>
            );
          })}
        </ol>
      )}
    </>
  );
}
