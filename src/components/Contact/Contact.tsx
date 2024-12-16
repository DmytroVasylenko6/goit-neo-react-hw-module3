import Button from '../Button'
import s from './Contact.module.css'

interface ContactProps {
  name: string
  number: string
  id: string
  onDeleteContact: (id: string) => void
}

export default function Contact({
  name,
  number,
  id,
  onDeleteContact
}: ContactProps) {
  return (
    <li className={s.item}>
      <p>
        {name}: {number}
      </p>
      <Button
        text={'Delete'}
        listener={() => onDeleteContact(id)}
        color="red"
      />
    </li>
  )
}
