import { AnnouncementInterface } from 'interfaces/announcement';
import { CalendarInterface } from 'interfaces/calendar';
import { OrganizationInterface } from 'interfaces/organization';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface PropertyInterface {
  id?: string;
  name: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  organization_id: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  announcement?: AnnouncementInterface[];
  calendar?: CalendarInterface[];
  organization?: OrganizationInterface;
  user?: UserInterface;
  _count?: {
    announcement?: number;
    calendar?: number;
  };
}

export interface PropertyGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  location?: string;
  organization_id?: string;
  user_id?: string;
}
