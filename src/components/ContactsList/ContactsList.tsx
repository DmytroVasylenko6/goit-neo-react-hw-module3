import s from './ContactsList.module.css'
import Button from '../Button'

interface Contact {
  id: string
  name: string
  number: string
}

interface ContactsListProps {
  contacts: Contact[]
  onDeleteContact: (id: string) => void
}

export default function ContactsList({
  contacts,
  onDeleteContact
}: ContactsListProps) {
  return (
    <>
      <ul className={s.list}>
        {contacts.map(({ name, number, id }) => {
          return (
            <li key={id} className={s.item}>
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
        })}
      </ul>
    </>
  )
}
