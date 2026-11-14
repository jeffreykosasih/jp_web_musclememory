import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Gauge, Repeat, Target } from 'lucide-react';
import { getGroup, groups, isBodyweight } from '@/lib/exercises';
import BodyIcon from '@/components/BodyIcon';
import GroupNav from '@/components/GroupNav';
import ExerciseList from '@/components/ExerciseList';

type Params = { group: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return groups.map((g) => ({ group: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const g = getGroup((await params).group);
  if (!g) return {};
  return {
    title: `${g.name} exercises`,
    description: `${g.exercises.length} ${g.name.toLowerCase()} exercises with sets, reps and step-by-step instructions. ${g.tagline}`,
  };
}

const tipIcons = [Target, Repeat, Gauge];

export default async function GroupPage({ params }: { params: Promise<Params> }) {
  const { group: slug } = await params;
  const group = getGroup(slug);
  if (!group) notFound();

  const i = groups.findIndex((g) => g.slug === slug);
  const next = groups[(i + 1) % groups.length];
  const bodyweight = group.exercises.filter(isBodyweight).length;

  return (
    <>
      <GroupNav current={slug} />

      <section className='mx-auto grid max-w-6xl gap-8 px-4 pb-10 pt-10 sm:px-6 md:grid-cols-[1fr_auto] md:items-end md:pt-16'>
        <div>
          <Link
            href='/#groups'
            className='inline-flex min-h-11 items-center gap-2 text-sm text-muted transition-colors hover:text-fg'
          >
            <ArrowLeft size={16} aria-hidden /> All muscle groups
          </Link>
          <p className='eyebrow mt-6'>{group.focus}</p>
          <h1 className='display mt-3 text-[clamp(3.5rem,11vw,7.5rem)]'>{group.name}</h1>
          <p className='mt-4 max-w-md text-lg text-fg/80'>{group.tagline}</p>
          <dl className='mt-8 flex gap-8 text-sm'>
            <div>
              <dt className='text-muted'>Exercises</dt>
              <dd className='display text-3xl'>{group.exercises.length}</dd>
            </div>
            <div>
              <dt className='text-muted'>No equipment</dt>
              <dd className='display text-3xl'>{bodyweight}</dd>
            </div>
          </dl>
        </div>
        <BodyIcon
          slug={slug}
          className='hidden size-64 text-accent drop-shadow-[0_0_40px_rgba(198,244,50,0.25)] md:block lg:size-72'
        />
      </section>

      <section aria-labelledby='exercises-heading' className='mx-auto max-w-6xl px-4 pb-16 sm:px-6'>
        <h2 id='exercises-heading' className='sr-only'>
          Exercises
        </h2>
        <ExerciseList group={group} />
      </section>

      {group.tips.length > 0 && (
        <section className='border-y border-line bg-surface/40'>
          <div className='mx-auto max-w-6xl px-4 py-16 sm:px-6'>
            <p className='eyebrow'>Coaching notes</p>
            <h2 className='display mt-3 text-4xl md:text-5xl'>{group.name} tips</h2>
            <ul className='mt-8 grid gap-4 md:grid-cols-3'>
              {group.tips.map((tip, idx) => {
                const Icon = tipIcons[idx % tipIcons.length];
                return (
                  <li key={tip.title} className='rounded-2xl border border-line bg-surface p-6'>
                    <Icon size={22} className='text-accent' aria-hidden />
                    <h3 className='mt-4 text-lg font-bold'>{tip.title}</h3>
                    <p className='mt-2 leading-relaxed text-muted'>{tip.body}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      )}

      <section className='mx-auto max-w-6xl px-4 py-16 sm:px-6'>
        <Link
          href={`/${next.slug}`}
          className='group flex items-center justify-between gap-6 rounded-2xl border border-line p-6 transition-colors hover:border-accent/60 sm:p-8'
        >
          <span>
            <span className='text-sm text-muted'>Up next</span>
            <span className='display mt-1 block text-4xl sm:text-5xl'>{next.name}</span>
          </span>
          <span className='grid size-14 shrink-0 place-items-center rounded-full bg-accent text-black transition-transform group-hover:translate-x-1'>
            <ArrowRight aria-hidden />
          </span>
        </Link>
      </section>
    </>
  );
}
