import {Component, OnInit, ViewChild} from '@angular/core';
import {PortfolioService} from '../portfolio.service';
import {Portfolio} from '../portfolio';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {orderBy} from 'lodash';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-portfolio-list',
  templateUrl: './portfolio-list.component.html',
  styleUrls: ['./portfolio-list.component.scss']
})
export class PortfolioListComponent implements OnInit {

  form: FormGroup;

  displayedColumnsAllPortfolios: string[] = ['currency', 'amount', 'dateOfPurchase', 'walletLocation', 'euroValue', 'currentEuroValue', 'profitLostEuroValue', 'button'];

  dataSource = null;
  portfolios: Portfolio[];
  // portfolio: Portfolio;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private portfolioService: PortfolioService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.portfolioService.getAllPortfolios().subscribe(value => {
      this.portfolios = value;
      console.log(value);
      this.portfolios = orderBy(this.portfolios, ['currentEuroValue']);
      this.dataSource = new MatTableDataSource(this.portfolios);
      // console.log(this.dataSource);
      this.dataSource.sort = this.sort; });
  }

  update(portfolioId: number): void {
    this.router.navigate(['/update-portfolio', portfolioId]);
  }

  delete(id: number): void {
    this.portfolioService.delete(id).subscribe(value => window.location.assign('/portfolio-list'));
  }

}
