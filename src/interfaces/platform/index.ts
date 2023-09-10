import { AnnouncementInterface } from 'interfaces/announcement';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface PlatformInterface {
  id?: string;
  name: string;
  url: string;
  api_key: string;
  api_secret: string;
  organization_id: string;
  created_at?: any;
  updated_at?: any;
  announcement?: AnnouncementInterface[];
  organization?: OrganizationInterface;
  _count?: {
    announcement?: number;
  };
}

export interface PlatformGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  url?: string;
  api_key?: string;
  api_secret?: string;
  organization_id?: string;
}
