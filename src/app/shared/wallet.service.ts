import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  private WALLET_BASE_URL = 'wallet';

  constructor(private httpClient: HttpClient) { }

  public getWalletList(): Observable <string[]> {
    return this.httpClient.get<string[]>(this.WALLET_BASE_URL);
  }
}
