import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProject, IUser } from '../../interface';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<IUser[]>(`${environment.apiURL}/users`);
  }
  createNew(user: IUser) {
    return this.http.post<IUser>(`${environment.apiURL}/users`, user);
  }
  editExisting(user: IUser) {
    return this.http.put<IUser>(`${environment.apiURL}/users`, user);
  }
  delete(id: string) {
    return this.http.delete<void>(`${environment.apiURL}/users/${id}`);
  }
}
