import React, { FC } from 'react'
import styled from 'styled-components'
import { SSubHeading } from './Heading'
import { Characters } from '../types/characters'

interface SSlotProps {
  name: 'rick' | 'morty'
  data: Characters.Item | undefined
  className?: string
}

const Slot: FC<SSlotProps> = ({ className, name, data }) => {
  return (
    <div className={className}>
      {!data ? <SSubHeading color='#fff'>{name}</SSubHeading> : null}
    </div>
  )
}

export const SSlot = styled(Slot)`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 180px;
  height: 220px;
  margin: 15px;
  padding-bottom: 30px;
  background-color: #dadada;
  background-image: url(${({ data }) => (data ? data.image : undefined)});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`
