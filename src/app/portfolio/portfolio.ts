export class Portfolio {
  id: number;

  currency: string;

  amount: number;

  dateOfPurchase: Date;

  walletLocation: string;

  euroValue: number;

  currentEuroValue: number;

  profitLostEuroValue: number;


  constructor(id: number, currency: string, amount: number, dateOfPurchase: Date, walletLocation: string, euroValue: number,
              currentEuroValue: number, profitLostEuroValue: number) {
    this.id = id;
    this.currency = currency;
    this.amount = amount;
    this.dateOfPurchase = dateOfPurchase;
    this.walletLocation = walletLocation;
    this.euroValue = euroValue;
    this.currentEuroValue = currentEuroValue;
    this.profitLostEuroValue = profitLostEuroValue;
  }
}
