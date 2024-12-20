import s from './Section.module.css'

interface SectionProps {
  title?: string
  children: React.ReactNode
}

export default function Section({ title, children }: SectionProps) {
  return (
    <section className={s.section}>
      {title && <h2 className={s.title}>{title}</h2>}
      {children}
    </section>
  )
}
