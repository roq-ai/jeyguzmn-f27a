import { PropertyInterface } from 'interfaces/property';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CalendarInterface {
  id?: string;
  date: any;
  status: string;
  property_id: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  property?: PropertyInterface;
  user?: UserInterface;
  _count?: {};
}

export interface CalendarGetQueryInterface extends GetQueryInterface {
  id?: string;
  status?: string;
  property_id?: string;
  user_id?: string;
}
