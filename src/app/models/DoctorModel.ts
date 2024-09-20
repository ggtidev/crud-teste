
export interface DoctorModel {
  id: number;
  name: string;
  email: string;
  crm: string;
  specialty:string;
  status: boolean;
  contact: string;
  createAt: Date;
  updatedAt: Date;
}