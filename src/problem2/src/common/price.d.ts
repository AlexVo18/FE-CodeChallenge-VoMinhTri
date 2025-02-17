export type Currency = {
  currency: string;
  date: string;
  price: number;
};
export type ChosenCurrency = Currency & { input: number };
