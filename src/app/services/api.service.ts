import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiURL: string = 'https://jsonplaceholder.typicode.com';

  constructor(private httpClient: HttpClient) {

  }

  public getTodosById(id: number) {
    return this.httpClient.get(`${this.apiURL}/todos/${id}`);
  }
}
