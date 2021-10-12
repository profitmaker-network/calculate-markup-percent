import { calculateMarkupPercent } from "./calculate_markup_percent"

it('test calculateMarginPercent should return 20', () => {
  const result = calculateMarkupPercent(100,120)
  expect(parseFloat(result.toFixed(2))).toBe(20)
})
it('test calculateMarkupPercent should return 0', () => {
  const result = calculateMarkupPercent(100,100)
  expect(parseFloat(result.toFixed(2))).toBe(0)
})
it('test calculateMarkupPercent should return -100', () => {
  const result = calculateMarkupPercent(100,0)
  expect(parseFloat(result.toFixed(2))).toBe(-100)
})
it('test calculateMarkupPercent should return -20', () => {
  const result = calculateMarkupPercent(100,80)
  expect(parseFloat(result.toFixed(2))).toBe(-20)
})

it('test calculateMarkupPercent should return -100', () => {
  const result = calculateMarkupPercent(100,0)
  expect(parseFloat(result.toFixed(2))).toBe(-100)
})
it('test calculateMarkupPercent should return 0', () => {
  const result = calculateMarkupPercent(0,0)
  expect(parseFloat(result.toFixed(2))).toBe(0)
})
