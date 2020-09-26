import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExchangeRatesResponse } from './payload/exchange-rates-response';

@Injectable({
  providedIn: 'root'
})
export class ExchangeRatesService {

  baseUrl = 'https://api.exchangeratesapi.io';
  latestEnpoint = `${this.baseUrl}/latest`;

  constructor(private httpClient: HttpClient) { }

  getRates(base: string): Observable<ExchangeRatesResponse> {
    return this.httpClient.get<ExchangeRatesResponse>(`${this.latestEnpoint}?base=${base}`);
  }
}
