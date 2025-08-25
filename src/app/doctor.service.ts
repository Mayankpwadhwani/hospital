import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TrainedIn } from './models/trainedin';
import { Medicine } from './models/medicine';
import { Room } from './models/rooms';
import { Treatment } from './models/trainedin';
import { Appointment } from './models/appointment';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private baseUrl="https://gdtc-training-api.azurewebsites.net"
  private token='eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5hbnRfaWQiOiI1NCIsInRlbmFudF9lbWFpbCI6Im1heWFuay53YWRod2FuaUBnb2RpZ2l0YWx0Yy5jb20iLCJjcmVhdGVkX29uIjoiOC8yMC8yMDI1IDI6NTE6MDMgUE0iLCJleHAiOjE3NjM5MDM0NDB9.q9ndFHzeS8DtANIDblVOLYVEqmticXGyANHiYIBM380';
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
    removeMedicine():Observable<Medicine[]>{
    const headers=new HttpHeaders({
      Authorization:`Bearer ${this.token}`
    })
    return this.http.delete<Medicine[]>(`${this.baseUrl}/api/hospital/medication`,{headers})
  }
  getdetails():Observable<Appointment[]>{
    const headers=new HttpHeaders({
      Authorization:`Bearer ${this.token}`
    })
    return this.http.get<Appointment[]>(`${this.baseUrl}/api/hospital/appointment`,{headers})

  }
  

}






