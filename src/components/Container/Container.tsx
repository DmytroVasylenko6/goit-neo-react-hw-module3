import s from './Container.module.css'

interface ContainerProps {
  children: React.ReactNode
}

function Container({ children }: ContainerProps) {
  return <div className={s.container}>{children}</div>
}

export default Container
