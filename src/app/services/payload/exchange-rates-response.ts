export interface ExchangeRatesResponse {
  rates: {
    [key: string]: number
  },
  base: string,
  data: string
}
