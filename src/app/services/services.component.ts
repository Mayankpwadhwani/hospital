import { Component, OnInit } from '@angular/core';
import { Room } from '../models/rooms';
import { Treatment } from '../models/trainedin';
import { Medicine } from '../models/medicine';
import { DoctorService } from '../doctor.service';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-services',
  imports: [MatTableModule,MatTabsModule,CommonModule,MatButtonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent implements OnInit {
  displayedColumns: string[] = ['ID','roomNumber', 'Type', 'availability', 'BlockCode','BlockFloor'];
  treatments1: string[] = ['ID','name', 'cost', 'createdOn'];
  medicines:string[]=['ID','name','brand','description','delete']
   roomData:Room[]=[]
   treatment:Treatment[]=[]
   medicine:Medicine[]=[]

constructor(private service:DoctorService){}
ngOnInit(){
  this.service.getRooms().subscribe((data)=>{
    this.roomData=data
    })
  this.service.getTreatment().subscribe((data1)=>{
    this.treatment=data1
  })  
   this.service.getMedicine().subscribe((data2)=>{
    this.medicine=data2
  })  



}

}