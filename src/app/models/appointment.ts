    export interface Appointment{
    physicianId: number
    appointmentId: number,
    starDateTime: string,
    patient:Patient,
    physician:Physician,
    prepNurse:Nurse
    }
    export interface Patient{
      patientId: number,
      name: string,
    }
    export interface Physician{
      physicianId: number,
      name:string,
      position: string,
    }
    export interface Nurse{
        nurse:{
            nurseId: number,
        name: string,
        position:number
        }
    }
 
   