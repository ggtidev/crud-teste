import { Expertise } from './expertise';
import { WorkingDay } from './workingDays';

export interface User {
  id: number;
  name: string;
  expertise: Expertise;
  crm: string;
  phone_number: string;
  email: string;
  hiring_date: Date;
  start_service: string;
  end_service: string;
  status: boolean;
  password: string;
  working_days: WorkingDay[];
}
