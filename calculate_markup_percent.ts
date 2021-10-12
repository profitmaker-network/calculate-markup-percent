export const calculateMarkupPercent = (buy_price: number, sell_price: number) : number => {
  if ( sell_price === 0 ) {
    if (buy_price > 0 ) {
      return -100
    } else if (buy_price === 0) {
      return 0
    }
  }
  if ( sell_price - buy_price === 0 ) return 0
  return (sell_price - buy_price) / buy_price * 100
}