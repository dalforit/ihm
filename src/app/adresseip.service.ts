import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdresseIP } from './AdresseIP';
import { Attack } from './Attack';

@Injectable({
  providedIn: 'root'
})
export class AdresseipService {
  
  private url_dresserip_all = 'http://localhost:8085/api/adresses-ip/all';
  private url_update_status = 'http://localhost:8085/api/adresses-ip';
  private url_attack_all = 'http://localhost:8085/api/attacks/all';
  private url_ip_pagination = 'http://localhost:8085/api/adresses-ip';


  constructor(private httpClient: HttpClient) { }

  getAllAdressesIp(): Observable<AdresseIP[]> {
    return this.httpClient.get<any[]>(this.url_dresserip_all);
  }

  updateStatus(request: any): Observable<void> {
    console.log("service");
    return this.httpClient.put<void>(`${this.url_update_status}`, request);
  }

  getAllAttack(): Observable<Attack[]> {
    return this.httpClient.get<any[]>(this.url_attack_all);
  }

    // Méthode pour appeler l'endpoint avec pagination
    findAllPageable(page: number, size: number): Observable<ApiResponse> {
      const url = `${this.url_ip_pagination}?page=${page}&size=${size}`;
      return this.httpClient.get<ApiResponse>(url);
    }

}

export interface AdresseIPResponse {
  valueIPV4: string;
  status: string;
  nbAttacks: number;
  listeAttacks: any[] | null;
}

export interface Pageable {
  pageNumber: number;
  pageSize: number;
  sort: Sort;
  offset: number;
  unpaged: boolean;
  paged: boolean;
}

export interface Sort {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
}

export interface ApiResponse {
  content: AdresseIPResponse[];
  pageable: Pageable;
  last: boolean;
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
  sort: Sort;
  first: boolean;
  numberOfElements: number;
  empty: boolean;
}
