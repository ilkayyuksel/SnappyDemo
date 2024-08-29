import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SnappyService {
  private apiUrl = 'https://api.example.com/snappy'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  createSnappy(snappyData: any): Observable<any> {
    return this.http.post(this.apiUrl, snappyData);
  }

  // Add other methods as needed, such as:
  // getSnappy(id: string): Observable<any> {
  //   return this.http.get(`${this.apiUrl}/${id}`);
  // }

  // updateSnappy(id: string, snappyData: any): Observable<any> {
  //   return this.http.put(`${this.apiUrl}/${id}`, snappyData);
  // }

  // deleteSnappy(id: string): Observable<any> {
  //   return this.http.delete(`${this.apiUrl}/${id}`);
  // }
}
