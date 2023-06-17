import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IType } from '../../interface';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class TypesService {
  constructor(private http: HttpClient) {}
  getAll(projectId: string) {
    return this.http.get<IType[]>(`${environment.apiURL}/types/${projectId}`);
  }
  createNew(type: IType) {
    return this.http.post<IType>(`${environment.apiURL}/types`, type);
  }
  editExisting(type: IType) {
    return this.http.put<IType>(`${environment.apiURL}/types`, type);
  }
  delete(id: string) {
    return this.http.delete<void>(`${environment.apiURL}/types/${id}`);
  }
}
