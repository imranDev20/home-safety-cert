export type ServiceFormInput = {
  isGas: boolean;
  isEicr: boolean;
  isEpc: boolean;
  appliances: string;
  fuseBoards: string;
  bedRooms: string;
  tflZone: string;
  time: string;
};

export type PersonalFormInput = {
  name: string;
  email: string;
  phone: string;
  house: string;
  postCode: string;
  city: string;
};
