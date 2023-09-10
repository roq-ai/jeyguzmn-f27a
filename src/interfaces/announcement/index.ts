import { PropertyInterface } from 'interfaces/property';
import { PlatformInterface } from 'interfaces/platform';
import { GetQueryInterface } from 'interfaces';

export interface AnnouncementInterface {
  id?: string;
  title: string;
  content: string;
  date_posted: any;
  property_id: string;
  platform_id: string;
  created_at?: any;
  updated_at?: any;

  property?: PropertyInterface;
  platform?: PlatformInterface;
  _count?: {};
}

export interface AnnouncementGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  content?: string;
  property_id?: string;
  platform_id?: string;
}
