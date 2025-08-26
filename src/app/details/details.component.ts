import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../doctor.service';
import { Appointment } from '../models/appointment';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import {  MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-details',
  imports: [MatCardModule,CommonModule,MatButtonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {

  detail:Appointment[]=[]
  filteredDetails:Appointment[]=[]

constructor(private service:DoctorService,private route:ActivatedRoute){ }

  ngOnInit(){
    const physicianId=Number(this.route.snapshot.paramMap.get('id'));
    // console.log(physicianId)
    this.service.getdetails().subscribe((data:Appointment[])=>{
      this.detail=data;
      this.filteredDetails=this.detail.filter(d=>d.physician.physicianId===physicianId)
      // console.log(this.filteredDetails)
      
    })
  }
  // deleteAppo(id:number){
  //   if (confirm("delete?")){
  //     this.service.deleteDetail(id).subscribe(()=>{
  //       this.filteredDetails=this.filteredDetails.filter(a=>a.appointmentId!=id);
  //     })
  //   }

  // }
}
