import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { IProject } from '../../interface';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<IProject[]>(`${environment.apiURL}/projects`);
  }
  createNew(project: IProject) {
    return this.http.post<IProject[]>(
      `${environment.apiURL}/projects`,
      project
    );
  }
  editExisting(project: IProject) {
    return this.http.put<IProject[]>(`${environment.apiURL}/projects`, project);
  }
  delete(id: string) {
    return this.http.delete<void>(`${environment.apiURL}/projects/${id}`);
  }
}
