import s from './ContactsList.module.css'
import Contact from '../Contact'
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
            <Contact
              key={id}
              name={name}
              number={number}
              id={id}
              onDeleteContact={onDeleteContact}
            />
          )
        })}
      </ul>
    </>
  )
}
