import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../doctor.service';
import { Appointment } from '../models/appointment';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  imports: [MatCardModule,CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {

  detail:Appointment[]=[]
  filteredDetails:Appointment[]=[]

constructor(private service:DoctorService,private route:ActivatedRoute){ }

  ngOnInit(){
     this.service.getdetails().subscribe((data:Appointment[])=>{
      this.detail=data;
    });
    // const physicianId = Number(this.route.snapshot.paramMap.get('id'));
  //   console.log(physicianId);
  //  this.filteredDetails = this.detail.filter(
  //    d => d.physicianId === physicianId
  //  );
  //  console.log("Filtered",this.filteredDetails);
  }
}
