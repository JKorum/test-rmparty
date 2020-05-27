import React, {
  useState,
  useEffect,
  useRef,
  FC,
  Dispatch,
  Fragment,
  SyntheticEvent,
} from 'react'
import { useLazyQuery } from '@apollo/react-hooks'
import styled from 'styled-components'
import { SSpinner } from './Spinner'
import { Characters } from '../types/characters'
import { CUSTOM } from '../queries/characters'

interface SInputProps {
  setCharacters: Dispatch<Characters.Data | undefined>
  className?: string
}

const Input: FC<SInputProps> = ({ className, setCharacters }) => {
  const [fetchItems, { data, loading }] = useLazyQuery<
    Characters.Data,
    Characters.Bindings
  >(CUSTOM)

  const [name, setName] = useState('')
  const timer = useRef<number | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleChange = (e: SyntheticEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value)
  }

  useEffect(() => {
    if (name.trim().length > 2 && !timer.current) {
      fetchItems({ variables: { name } })
      timer.current = setTimeout(() => {
        timer.current = null
      }, 300)
    }
  }, [name, fetchItems])

  useEffect(() => {
    setCharacters(data)
  }, [data, setCharacters])

  useEffect(() => {
    inputRef.current?.focus()
    return () => {
      if (timer.current) {
        clearTimeout(timer.current)
      }
    }
  }, [])

  return (
    <Fragment>
      <input
        ref={inputRef}
        className={className}
        type='text'
        placeholder='start typing a name...'
        value={name}
        onChange={handleChange}
      />
      {loading ? <SSpinner /> : null}
    </Fragment>
  )
}

export const SInput = styled(Input)`
  max-width: 810px;
  height: 80px;
  border: 1px solid #a0a0a0;
  padding: 22px 27px 25px;
  font-size: 30px;
  font-weight: normal;
  line-height: 35px;
  text-transform: uppercase;
`
