import { useState, ChangeEvent, useEffect } from 'react'
import Section from './Section'
import ContactsList from './ContactsList'
import ContactForm from './ContactForm'
import { nanoid } from 'nanoid'
import Container from './Container'
import SearchBox from './SearchBox'
import PlaceholderEmpty from './PlaceholderEmpty'

interface Contact {
  id: string
  name: string
  number: string
}

interface FormData {
  name: string
  number: string
}

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }
]
const getInitialContacts = () => {
  const savedContacts = localStorage.getItem('contacts')
  return savedContacts ? JSON.parse(savedContacts) : initialContacts
}

const App = () => {
  const [contacts, setContacts] = useState<Contact[]>(getInitialContacts)
  const [filter, setFilter] = useState('')

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])

  const deleteContact = (contactId: string): void => {
    setContacts(contacts.filter((contact) => contact.id !== contactId))
  }

  const handleSubmitForm = (formdata: FormData): void => {
    const newContact = {
      id: nanoid(),
      ...formdata
    }

    if (newContact.name === '') {
      alert('Please enter contact name')
      return
    }
    if (newContact.number === '') {
      alert('Please enter contact phone number')
      return
    }

    const hasContact = contacts.some(
      (contact) => contact.name === newContact.name
    )

    if (hasContact) {
      alert(`${newContact.name} is already in contacts`)
    } else {
      setContacts([...contacts, newContact])
    }
  }

  const handleSearch = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.currentTarget
    setFilter(value)
  }

  const getVisibleContacts = (): Contact[] => {
    const normalizeFilter = filter.toLowerCase()
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizeFilter)
    )
  }

  const visibleContacts = getVisibleContacts()

  return (
    <>
      <Section>
        <Container>
          <h1>PhoneBook</h1>
          <ContactForm Submit={handleSubmitForm} />
        </Container>
      </Section>
      <Section>
        {contacts.length > 1 && (
          <SearchBox value={filter} onSearch={handleSearch} />
        )}
        {contacts.length > 0 ? (
          <ContactsList
            contacts={visibleContacts}
            onDeleteContact={deleteContact}
          />
        ) : (
          <PlaceholderEmpty />
        )}
      </Section>
    </>
  )
}

export default App
