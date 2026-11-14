type Props = { slug: string; className?: string };

/** Body diagram for a muscle group, tinted with the current text colour. */
export default function BodyIcon({ slug, className = '' }: Props) {
  const url = `url(/images/exercises/body_${slug}.svg)`;
  return (
    <span
      aria-hidden
      className={`body-icon block ${className}`}
      style={{ maskImage: url, WebkitMaskImage: url }}
    />
  );
}
