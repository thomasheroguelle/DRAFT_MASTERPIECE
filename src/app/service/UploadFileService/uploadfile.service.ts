import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { File } from '../../../Model/File';

@Injectable({
  providedIn: 'root'
})
export class UploadfileService {
  errorMessage?: string;
  private url = 'http://localhost:8091/api/v1/image';

  constructor(private httpClient: HttpClient) { }

  uploadFile(formData: FormData): Observable<File> {
    return this.httpClient.post<File>(this.url, formData);
  }

  getFile(fileName: string): Observable<File> {
    return this.httpClient.get<File>(
      `${this.url}/${fileName}`
    );
  }
}
