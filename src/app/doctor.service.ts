import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TrainedIn } from './models/trainedin';
import { Medicine } from './models/medicine';
import { Room } from './models/rooms';
import { Treatment } from './models/trainedin';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  
  private baseUrl="https://gdtc-training-api.azurewebsites.net"
  private token='eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5hbnRfaWQiOiIwIiwidGVuYW50X2VtYWlsIjoibWF5YW5rLndhZGh3YW5pQGdvZGlnaXRhbHRjLmNvbSIsImNyZWF0ZWRfb24iOiI4LzIwLzIwMjUgMjo1MTowMyBQTSIsImV4cCI6MTc1NjA0NzA2M30.DSxiIb27u3GSIEuD4T_FhjMNoe4SS-aRP3fqaaoBHKY';
  constructor(private http:HttpClient) { }

  getTrainedIn():Observable<TrainedIn[]>{
    const headers=new HttpHeaders({
      Authorization:`Bearer ${this.token}`
    })
    return this.http.get<TrainedIn[]>(`${this.baseUrl}/api/hospital/trainedin`,{headers})
  }

  getRooms():Observable<Room[]>{
    const headers=new HttpHeaders({
      Authorization:`Bearer  ${this.token}`
    })
    return this.http.get<Room[]>(`${this.baseUrl}/api/hospital/room`,{headers})
  }

  getTreatment():Observable<Treatment[]>{
    const headers=new HttpHeaders({
      Authorization:`Bearer  ${this.token}`
    })
    return this.http.get<Treatment[]>(`${this.baseUrl}/api/hospital/procedure`,{headers})
  }

  getMedicine():Observable<Medicine[]>{
    const headers=new HttpHeaders({
      Authorization:`Bearer  ${this.token}`
    })
    return this.http.get<Medicine[]>(`${this.baseUrl}/api/hospital/medication`,{headers})

  }
}
