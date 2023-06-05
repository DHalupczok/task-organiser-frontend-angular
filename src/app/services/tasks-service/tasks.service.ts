import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProject, ITask } from '../../interface';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor(private http: HttpClient) {}

  getAll(projectId: string) {
    return this.http.get<ITask[]>(`${environment.apiURL}/tasks/${projectId}`);
  }
  createNew(task: ITask) {
    return this.http.post<ITask[]>(`${environment.apiURL}/tasks`, task);
  }
  editExisting(task: ITask) {
    return this.http.put<ITask[]>(`${environment.apiURL}/tasks`, task);
  }
  delete(id: string) {
    return this.http.delete<void>(`${environment.apiURL}/tasks/${id}`);
  }
}
