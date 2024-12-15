import { nanoid } from 'nanoid'
import { ChangeEvent } from 'react'
import Input from '../Input'
import Container from '../Container'

interface SearchBoxProps {
  value: string
  onSearch: (event: ChangeEvent<HTMLInputElement>) => void
}

export default function SearchBox({ value, onSearch }: SearchBoxProps) {
  const inputFindId = nanoid()
  return (
    <Container>
      <Input
        label="Find contacts by name"
        type="text"
        name="filter"
        value={value}
        id={inputFindId}
        placeholder="Find..."
        onChange={onSearch}
      />
    </Container>
  )
}
