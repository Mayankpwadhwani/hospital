export interface TrainedIn{
    trainedInId: number;
    physicianId: number;
    physcianName: string;
    certificationDate: string,
    certificationExpires:string,
    createdOn: string;
    treatment:Treatment
}

export interface Treatment{
    procedureId: number,
      name: string,
      cost: number,
      createdOn:string 
}