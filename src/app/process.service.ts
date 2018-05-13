import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Process } from './models/process';

@Injectable({
  providedIn: 'root'
})
export class ProcessService {
	private url = '/assets/process-instances.json';
  constructor(private http: HttpClient) { }

  getProcesses():Observable<Process[]>{
    return this.http.get<Process[]>(this.url);
  }

  createProcessInstance(newProcessInstance: Process): Observable<Process> {
    return this.http.post<Process>(this.url, newProcessInstance);
  }
}
