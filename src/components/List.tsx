import React, { FC, useState, SyntheticEvent } from 'react'
import styled from 'styled-components'
import { SItem } from './'
import { noBanned } from '../utils/filters'
import { Characters } from '../types/characters'

interface SListProps {
  data: Characters.Item[] | null
  pickItem: (picked: Characters.Item) => () => void
  className?: string
}

const List: FC<SListProps> = ({ className, data, pickItem }) => {
  const [banned, setBanned] = useState<string[]>([])

  const handleBann = (id: string) => {
    return (e: SyntheticEvent<HTMLButtonElement>) => {
      e.stopPropagation()
      setBanned(prev => [...prev, id])
    }
  }

  return (
    <div className={className}>
      {data
        ? noBanned(data, banned).map(item => (
            <SItem
              key={item.id}
              data={item}
              pickItem={pickItem}
              bann={handleBann}
            />
          ))
        : null}
    </div>
  )
}

export const SList = styled(List)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1200px;
  margin-top: 15px;
  margin-bottom: 30px;
`
