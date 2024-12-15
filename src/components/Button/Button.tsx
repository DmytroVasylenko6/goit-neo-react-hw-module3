import s from './Button.module.css'
import classNames from 'classnames'

interface ButtonProps {
  text: string
  listener?: () => void
  type?: 'button' | 'submit' | 'reset'
  color?: 'red' | 'blue'
}

export default function Button({ text, listener, type, color }: ButtonProps) {
  const blueColor = s.blueColor
  const redColor = s.redColor

  const style = [s.button]

  if (color === 'red') {
    style.push(redColor)
  }

  if (color === 'blue') {
    style.push(blueColor)
  }

  return (
    <button
      className={classNames(style.join(' '))}
      type={type}
      onClick={listener}
    >
      {text}
    </button>
  )
}
