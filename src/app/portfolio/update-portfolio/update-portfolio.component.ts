import { Component, OnInit } from '@angular/core';
import {PortfolioService} from '../portfolio.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Portfolio} from '../portfolio';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CurrencyService} from '../../shared/currency.service';
import {WalletService} from '../../shared/wallet.service';

@Component({
  selector: 'app-update-portfolio',
  templateUrl: './update-portfolio.component.html',
  styleUrls: ['./update-portfolio.component.scss']
})
export class UpdatePortfolioComponent implements OnInit {

  // portfolioId: number;
  portfolio: Portfolio;
  form: FormGroup;
  currencies: string[];
  wallets: string[];

  constructor(private portfolioService: PortfolioService, private router: Router, private route: ActivatedRoute,
              private formBuilder: FormBuilder, private currencyService: CurrencyService, private walletService: WalletService) {
    this.portfolio = {} as Portfolio;
  }

  ngOnInit(): void {
    this.portfolio.id = this.route.snapshot.params.id;
    this.portfolioService.getById(this.portfolio.id).subscribe(data => {
      this.portfolio = data;
      console.log(data);
      this.form.setValue(this.portfolio);
      this.currencyService.getCurrency().subscribe(value => this.currencies = value);
      this.walletService.getWalletList().subscribe(value => this.wallets = value);
    });

    this.form = this.formBuilder.group({
      id: new FormControl(this.portfolio.id, Validators.required),
      currency: new FormControl(this.portfolio.currency, Validators.required),
      amount: new FormControl(this.portfolio.amount, Validators.required),
      dateOfPurchase: new FormControl(this.portfolio.dateOfPurchase, Validators.required),
      walletLocation: new FormControl(this.portfolio.walletLocation, Validators.required),
      euroValue: new FormControl(this.portfolio.euroValue, Validators.required),
      currentEuroValue: new FormControl(this.portfolio.currentEuroValue, Validators.required),
      profitLostEuroValue: new FormControl(this.portfolio.profitLostEuroValue, Validators.required),
    });
  }

  onSubmit(portfolio: Portfolio): void {
    this.portfolio = this.form.value;
    console.log(this.portfolio);
    this.portfolioService.update(portfolio.id, portfolio).subscribe(data => window.location.assign('/portfolio-list')
    );
  }

  back(): void {
    this.router.navigate(['/portfolio-list']);
  }

}
