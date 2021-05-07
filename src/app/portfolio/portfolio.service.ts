import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Portfolio} from './portfolio';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private PORTFOLIO_BASE_URL = 'portfolio';

  constructor(private httpClient: HttpClient) { }

  public getAllPortfolios(): Observable<Portfolio[]> {
    return this.httpClient.get<Portfolio[]>(this.PORTFOLIO_BASE_URL);
  }

  public getById(id: number): Observable<Portfolio> {
    return this.httpClient.get<Portfolio>(this.PORTFOLIO_BASE_URL + '/' + id);
  }

  public add(portfolio: Portfolio): Observable<Portfolio> {
    return this.httpClient.post<Portfolio>(this.PORTFOLIO_BASE_URL, portfolio);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete(this.PORTFOLIO_BASE_URL + '/' + id);
  }

  public update(id: number, portfolio: Portfolio): Observable<Portfolio> {
    return this.httpClient.put<Portfolio>(this.PORTFOLIO_BASE_URL + '/' + id, portfolio);
  }
}
