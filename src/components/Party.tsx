import React, { FC, Fragment } from 'react'
import styled from 'styled-components'
import { SHeading } from './Heading'
import { SSlot } from './Slot'
import { pickCharacter } from '../utils/filters'
import { Characters } from '../types/characters'

interface SPartyProps {
  pickedItems: Characters.Item[]
  className?: string
}

const Party: FC<SPartyProps> = ({ className, pickedItems }) => {
  return (
    <Fragment>
      <SHeading>Party</SHeading>
      <div className={className}>
        <SSlot name='rick' data={pickCharacter(pickedItems, 'rick')} />
        <SSlot name='morty' data={pickCharacter(pickedItems, 'morty')} />
      </div>
    </Fragment>
  )
}

export const SParty = styled(Party)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 125px;
`
