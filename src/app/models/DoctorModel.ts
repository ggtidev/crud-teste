
export interface DoctorModel {
  id: number;
  name: string;
  email: string;
  crm: string;
  speciality: string;
  status: string;
  contact: string;
  createAt: Date;
  updatedAt: Date;
  startService: string;
  endService: string;
  daysOfWeek: string[];
}