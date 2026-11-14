import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { groups, totalExercises, isBodyweight } from '@/lib/exercises';
import BodyIcon from '@/components/BodyIcon';
import ExerciseSearch from '@/components/ExerciseSearch';

const bodyweightCount = groups.flatMap((g) => g.exercises).filter(isBodyweight).length;

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className='relative isolate -mt-16 flex min-h-[88svh] items-end overflow-hidden pt-16'>
        <Image
          src='/images/ui/backgrounds/background.jpg'
          alt=''
          fill
          priority
          sizes='100vw'
          className='-z-20 object-cover object-[50%_30%] grayscale'
        />
        <div className='absolute inset-0 -z-10 bg-gradient-to-t from-bg via-bg/70 to-bg/20' />

        <div className='mx-auto w-full max-w-6xl px-4 pb-14 sm:px-6 md:pb-20'>
          <p className='eyebrow'>Exercise library</p>
          <h1 className='display mt-4 text-[clamp(4rem,15vw,11rem)]'>
            Muscle
            <br />
            Memory
          </h1>
          <p className='mt-6 max-w-md text-lg leading-relaxed text-fg/85 sm:text-xl'>
            Get stronger, be better. Simple, step-by-step exercises for every muscle
            group.
          </p>
          <div className='mt-8 flex flex-wrap items-center gap-x-8 gap-y-4'>
            <a href='#groups' className='btn-accent'>
              Browse exercises <ArrowDown size={18} aria-hidden />
            </a>
            <dl className='flex gap-8 text-sm'>
              <div>
                <dt className='text-muted'>Exercises</dt>
                <dd className='display text-3xl'>{totalExercises}</dd>
              </div>
              <div>
                <dt className='text-muted'>No equipment</dt>
                <dd className='display text-3xl'>{bodyweightCount}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Muscle groups */}
      <section id='groups' className='mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24'>
        <div className='flex flex-col justify-between gap-4 md:flex-row md:items-end'>
          <div>
            <p className='eyebrow'>Muscle groups</p>
            <h2 className='display mt-3 text-5xl md:text-6xl'>What are we training?</h2>
          </div>
          <p className='max-w-sm text-muted'>
            Pick a group to see {groups[0].exercises.length} exercises with sets, reps
            and clear steps.
          </p>
        </div>

        <ul className='mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4'>
          {groups.map((g) => (
            <li key={g.slug}>
              <Link
                href={`/${g.slug}`}
                className='group relative flex h-full min-h-48 flex-col overflow-hidden rounded-2xl border border-line bg-surface p-5 transition-colors hover:border-accent/60 hover:bg-surface-2 sm:min-h-60'
              >
                <BodyIcon
                  slug={g.slug}
                  className='absolute -bottom-4 -right-6 size-40 text-fg/10 transition-colors duration-300 group-hover:text-accent sm:size-48'
                />
                <span className='relative flex items-start justify-between'>
                  <span className='display text-3xl sm:text-4xl'>{g.name}</span>
                  <ArrowUpRight
                    size={20}
                    aria-hidden
                    className='text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent'
                  />
                </span>
                <span className='relative mt-1 text-sm text-muted'>{g.focus}</span>
                <span className='relative mt-auto pt-6 text-sm font-semibold'>
                  {g.exercises.length} exercises
                </span>
              </Link>
            </li>
          ))}
          <li className='hidden lg:block'>
            <a
              href='#search'
              className='flex h-full min-h-60 flex-col justify-between rounded-2xl border border-dashed border-line p-5 text-muted transition-colors hover:border-accent/60 hover:text-fg'
            >
              <span className='display text-3xl'>Looking for one move?</span>
              <span className='text-sm font-semibold'>Search all {totalExercises} →</span>
            </a>
          </li>
        </ul>
      </section>

      {/* Search */}
      <section id='search' className='border-t border-line bg-surface/40'>
        <div className='mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24'>
          <p className='eyebrow'>Search</p>
          <h2 className='display mt-3 text-5xl md:text-6xl'>Find an exercise</h2>
          <ExerciseSearch />
        </div>
      </section>
    </>
  );
}
