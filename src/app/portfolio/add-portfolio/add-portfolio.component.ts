import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PortfolioService} from '../portfolio.service';
import {Router} from '@angular/router';
import {Portfolio} from '../portfolio';
import {CurrencyService} from '../../shared/currency.service';
import {WalletService} from '../../shared/wallet.service';

@Component({
  selector: 'app-add-portfolio',
  templateUrl: './add-portfolio.component.html',
  styleUrls: ['./add-portfolio.component.scss']
})
export class AddPortfolioComponent implements OnInit {

  form: FormGroup;
  portfolios: Portfolio[];
  currencies: string[];
  wallets: string[];

  constructor(private portfolioService: PortfolioService, private router: Router, private fb: FormBuilder,
              private currencyService: CurrencyService, private walletService: WalletService) { }

  ngOnInit(): void {
    this.initForm();
    this.currencyService.getCurrency().subscribe(value => this.currencies = value);
    this.walletService.getWalletList().subscribe(value => this.wallets = value);
  }

  private initForm(): void {
    this.form = this.fb.group({
      id: null,
      currency: ['', [Validators.required]],
      amount: ['', [Validators.required]],
      dateOfPurchase: null,
      walletLocation: ['', [Validators.required]],
      euroValue: null,
      currentEuroValue: null,
      profitLostEuroValue: null
    });
  }

  add(): void {
    const newPortfolio: Portfolio = {
      id: null,
      currency: this.form.get('currency').value,
      amount: this.form.get('amount').value,
      dateOfPurchase: null,
      walletLocation: this.form.get('walletLocation').value,
      euroValue: null,
      currentEuroValue: null,
      profitLostEuroValue: null
    };
    this.portfolioService.add(newPortfolio).subscribe(value => window.location.assign('/portfolio-list'));
    this.initForm();
  }

  InvalidInput(fieldName): boolean {
    return this.form.controls[fieldName].invalid && (this.form.controls[fieldName].dirty || this.form.controls[fieldName].touched);
  }

  back(): void {
    this.router.navigate(['/portfolio-list']);
  }

}
