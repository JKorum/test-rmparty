import { Characters } from '../types/characters'

export const noBanned = (
  characters: Characters.Item[],
  banned: string[]
): Characters.Item[] => {
  return characters.filter((item) => !banned.includes(item.id))
}

export const updatePicked = (
  picked: Characters.Item,
  prev: Characters.Item[]
): Characters.Item[] | null => {
  let idx = prev.findIndex((item) => item.name === picked.name)
  // character is already picked
  if (idx !== -1) {
    return null
  }

  const matched = picked.name.match(/morty|rick/i)
  // character is not rick or morty
  if (!matched) {
    return null
  }

  idx = prev.findIndex((item) =>
    item.name.toLowerCase().includes(matched[0].toLowerCase())
  )

  if (idx === -1) {
    // add character
    return [...prev, picked]
  } else {
    // update character
    return prev.map((item, i) => {
      if (i === idx) {
        return picked
      }
      return item
    })
  }
}

export const pickCharacter = (
  items: Characters.Item[],
  char: 'rick' | 'morty'
): Characters.Item | undefined => {
  return items.find((item) => item.name.toLocaleLowerCase().includes(char))
}
