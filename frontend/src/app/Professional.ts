//necessário ser igual ao backend
export interface Professional {
    _id?: string;
    name: string;
    specialty: string;
    crm: string;
    phone?: string;
    email: string;
    status: boolean;
    hiringDate?: Date;
    consultationTimes?: {
      initial?: string;
      final?: string;
    };
    daysOfWeek?: string[];
  }