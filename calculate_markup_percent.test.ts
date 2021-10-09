import { calculate_markup } from "./calculate_markup"

it('test calculate_markup ', () => {
  const result = calculate_markup(100, 50)
  expect(result).toBe(100)
})
it('test calculate_markup should return 0', () => {
  const result = calculate_markup(10, 100)
  expect(result).toBe(0)
})
