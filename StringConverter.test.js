import { expect, test } from 'bun:test'
import { StringConverter } from './StringConverter'

test('Converts String to BinaryString', () => {
  const convert = new StringConverter()
  expect(convert.string_2_binary('Test')).toBe(
    '1010100 1100101 1110011 1110100'
  )
})

test('Converts BinaryString to Invisible and Back', () => {
  const convert = new StringConverter()
  const invsblRes = convert.binary_2_invisible(
    '1010100 1100101 1110011 1110100'
  )
  expect(invsblRes.length).toBe(61)

  expect(convert.invisible_2_binary(invsblRes)).toBe(
    '1010100 1100101 1110011 1110100'
  )
})

test('Converts BinaryString to String', () => {
  const convert = new StringConverter()
  expect(convert.binary_2_string('1010100 1100101 1110011 1110100')).toBe(
    'Test'
  )
})
