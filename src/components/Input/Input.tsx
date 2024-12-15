import s from './Input.module.css'

interface InputProps {
  name: string
  label: string
  value: string
  id: string
  placeholder: string
  type: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  pattern?: string
  error?: string | false
}

function Input({
  name,
  label,
  value,
  id,
  placeholder,
  type,
  onChange,
  error
}: InputProps) {
  return (
    <label htmlFor={id} className={s.label}>
      {label}
      <input
        type={type}
        name={name}
        value={value}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        className={s.input}
      />
      {error && <span className={s.error}>{error}</span>}
    </label>
  )
}

export default Input
