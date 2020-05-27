import React, { useState, FC, Fragment } from 'react'
import { useQuery } from '@apollo/react-hooks'
import styled from 'styled-components'
import { SInput } from './Input'
import { SList } from './List'
import { SParty } from './Party'
import { SSpinner } from './Spinner'
import { updatePicked } from '../utils/filters'
import { Characters } from '../types/characters'
import { DEFAULT } from '../queries/characters'

interface SAppProps {
  className?: string
}

const App: FC<SAppProps> = ({ className }) => {
  const { loading, data: initial } = useQuery<Characters.Data>(DEFAULT)

  const [data, setData] = useState<Characters.Data | undefined>()
  const [pickedItems, pickItem] = useState<Characters.Item[]>([])

  const handlePick = (picked: Characters.Item) => {
    return () => {
      const updated = updatePicked(picked, pickedItems)
      if (updated) {
        pickItem(updated)
      }
    }
  }

  return (
    <Fragment>
      <div className={className}>
        <SInput setCharacters={setData} />
        <SList
          data={
            data
              ? data.characters.results
              : initial
              ? initial.characters.results
              : null
          }
          pickItem={handlePick}
        />
      </div>
      <SParty pickedItems={pickedItems} />
      {loading ? <SSpinner /> : null}
    </Fragment>
  )
}

export const SApp = styled(App)`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 140px;
  padding-bottom: 70px;
`
