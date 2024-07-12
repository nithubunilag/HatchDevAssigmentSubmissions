export const CURRENCIES = {
  NGN: {
    name: "Nigerian Naira",
    rate: 1,
  },
  USD: {
    name: "US Dollar",
    rate: 1527.50,
  },
  EUR: {
    name: "Euro",
    rate: 16559.89,
  },
  JPY: {
    name: "Japanese Yen",
    rate: 9.50,
  },
  GBP: {
    name: "Pound Sterling",
    rate: 1956.58,
  },
  AUD: {
    name: "Australian Dollar",
    rate: 1031.14,
  },
  CAD: {
    name: "Canadian Dollar",
    rate: 1118.11,
  },
  CHF: {
    name: "Swiss Franc",
    rate: 1704.78,
  },
  CNY: {
    name: "Chinese Yuan",
    rate: 210.14,
  },
  HKD: {
    name: "Hong Kong Dollar",
    rate: 195.47,
  },
};

export type Currency = keyof typeof CURRENCIES;

export const convert = (fromCurrency: Currency, toCurrency: Currency, amount: number) => {
  let converted = amount * CURRENCIES[fromCurrency].rate / CURRENCIES[toCurrency].rate;
  return converted.toFixed(2).toString();
};
