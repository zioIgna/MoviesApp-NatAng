import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalsService {

  baseUrl = 'http://localhost:3000';

  constructor() { }

  getBaseUrl(): string {
    return this.baseUrl;
  }

}
