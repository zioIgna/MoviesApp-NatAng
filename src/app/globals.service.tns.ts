import { Injectable } from '@angular/core';
import { isAndroid } from 'tns-core-modules/platform';

@Injectable({
  providedIn: 'root'
})
export class GlobalsService {

  baseUrl = 'http://localhost:3000';

  constructor() {
    // fino a versione Android 8.1 (api 27) si può utilizzare 10.0.2.2 come indirizzo di localhost
    // da Android 9 si incorre in errore di Cleartext
    // l'url 'http://movserv2-env.dpp...' non è necessaria in quanto basta il localhost 10.0.2.2
    if (isAndroid) {
      // this.baseUrl = 'http://movserv2-env.dppfpp23ez.eu-west-1.elasticbeanstalk.com';
      this.baseUrl = 'http://10.0.2.2:3000';
    }
  }

  getBaseUrl(): string {
    return this.baseUrl;
  }

}