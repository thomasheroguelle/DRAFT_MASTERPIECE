import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAppartement } from '../AppartementModel';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MasterpieceapiService {

  errorMessage?: string;
  private url = "http://localhost:8090/appt/api";

  constructor(private httpClient: HttpClient) { }

  // createAppartement(appartment: IAppartement): Observable<IAppartement> {
  //   return this.httpClient.post<IAppartement>(this.url, appartment);
  // }

  getAppartements(): Observable<IAppartement[]> {
    return this.httpClient.get<IAppartement[]>(this.url);
  }

  getAppartementById(id: number): Observable<IAppartement> {
    return this.httpClient.get<IAppartement>(`${(this.url)}/${id}`)
  }
  updateAppartement(appartmentUpdated: IAppartement): void {
    this.httpClient.patch<IAppartement>(`${this.url}/${appartmentUpdated.id}`, appartmentUpdated).subscribe({
      error: error => {
        this.errorMessage = error.message;
        console.error('error during update', error)
      }
    }
    )
  }

  createNewAppartement(newAppartement: IAppartement): Observable<IAppartement> {
    return this.httpClient.post<IAppartement>(this.url, newAppartement);
  }
  deleteAppartement(appartementId: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.url}/${appartementId}`)
  }
}
