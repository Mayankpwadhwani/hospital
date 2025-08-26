import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../doctor.service';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { TrainedIn } from '../models/trainedin';
import { MatButtonModule } from '@angular/material/button';
import {  RouterModule } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-doctors',
  imports: [CommonModule,MatCardModule,MatGridListModule,MatButtonModule,RouterModule],
  templateUrl: './doctors.component.html',
  styleUrl: './doctors.component.css'
})
export class DoctorsComponent implements OnInit {
  trainedInData:TrainedIn[]=[]
constructor(private service:DoctorService , private router : Router){}
ngOnInit(){
  this.service.getTrainedIn().subscribe((data)=>{
    this.trainedInData=data

    
    })
}
}
