export interface Room{
   roomId: number,
   roomNumber: number,
    roomType: string,
    availability: boolean,
    createdOn:string
    block:Block
}

export interface Block{
    blockId: number,
      blockFloor: number,
      blockCode: number,
      createdOn:string
}