import React, { FC } from 'react'
import styled from 'styled-components'
import { SButton } from './'
import { Characters } from '../types/characters'

interface SItemProps {
  data: Characters.Item
  pickItem: (picked: Characters.Item) => () => void
  bann: (id: string) => () => void
  className?: string
}

const Item: FC<SItemProps> = ({ className, data, pickItem, bann }) => {
  return (
    <div className={className} onClick={pickItem(data)}>
      <SButton onClick={bann(data.id)}>&times;</SButton>
    </div>
  )
}

export const SItem = styled(Item)`
  position: relative;
  width: 180px;
  height: 220px;
  margin: 15px;
  cursor: pointer;
  background-image: url(${({ data: { image } }) => image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  transition: all 160ms linear;
  &:hover {
    transform: scale(1.1);
  }
`
