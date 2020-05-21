import { noBanned, updatePicked, pickCharacter } from './filters'
import { Characters } from '../types/characters'

let items: Characters.Item[] = []
let items_two: Characters.Item[] = []
let items_three: Characters.Item[] = []
let banned: string[] = ['2', '3']

beforeEach(() => {
  items = [
    { id: '1', name: 'Rickimer', image: 'url' },
    { id: '2', name: 'Morty', image: 'url' },
    { id: '3', name: 'Summer', image: 'url' },
  ]
  items_two = [
    { id: '3', name: 'Summer', image: 'url' },
    { id: '4', name: 'Jerry', image: 'url' },
  ]
  items_three = [
    { id: '5', name: 'Rick', image: 'url' },
    { id: '6', name: 'Mortymer', image: 'url' },
  ]
})

describe('noBanned', () => {
  test('it removes banned entities from an array', () => {
    expect(noBanned(items, banned)).toHaveLength(1)
    expect(noBanned(items, banned)[0].id).toBe('1')
  })
})

describe('updatePicked', () => {
  test('it returns null if an array already has an input item', () => {
    expect(updatePicked(items[0], items)).toBe(null)
  })
  test('it returns null if the name of an input item includes neither rick or morty', () => {
    expect(updatePicked(items_two[1], items)).toBe(null)
  })
  test('it adds an item to an array ', () => {
    expect(updatePicked(items_three[1], items_three.slice(0, 1))).toEqual(
      items_three
    )
  })
  test('it updates an item in an array', () => {
    const result = updatePicked(items[0], items_three)
    expect(result).toHaveLength(2)
    expect(result ? result[0] : result).toEqual(items[0])
  })
})

describe('pickCharacter', () => {
  test('it returns an entity from an array', () => {
    expect(pickCharacter(items, 'rick')).toEqual(items[0])
    expect(pickCharacter(items, 'morty')).toEqual(items[1])
  })
  test('it returns undefined if an array has neither rick or morty', () => {
    expect(pickCharacter(items_two, 'rick')).toBe(undefined)
    expect(pickCharacter(items_two, 'morty')).toBe(undefined)
  })
})
