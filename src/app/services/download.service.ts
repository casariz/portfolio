import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DownloadService {
  constructor(private http: HttpClient) {}

  downloadFile(path: string): Observable<Blob> {
    return this.http.get(path, { responseType: 'blob' });
  }
}
