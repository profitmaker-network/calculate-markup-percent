export const calculate_markup_percent = (sell_price: number, buy_price: number) : number => {
  if (buy_price === 0 || (sell_price - buy_price) === 0) return 0
  return (sell_price - buy_price) / buy_price * 100
}