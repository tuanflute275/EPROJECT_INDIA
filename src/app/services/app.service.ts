import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private API_GET_PRODUCT = 'http://localhost:3000/user';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // Authorization: 'my-auth-token'
    }),
  };

  constructor(private httpClient: HttpClient) { }

  public getProduct(): Observable<any> {
    const url = `${this.API_GET_PRODUCT}`
    return this.httpClient.get<any>(url, this.httpOptions)
  }


  // addEmployee(data: any): Observable<any> {
  //   return this._http.post('http://localhost:3000/employees', data);
  // }

  // getEmployeeList(): Observable<any> {
  //   return this._http.get('http://localhost:3000/employees');
  // }

  // updateEmployee(id: number, data: any): Observable<any> {
  //   return this._http.put(`http://localhost:3000/employees/${id}`, data);
  // }

  // deleteEmployee(id: number): Observable<any> {
  //   return this._http.delete(`http://localhost:3000/employees/${id}`);
  // }
}
