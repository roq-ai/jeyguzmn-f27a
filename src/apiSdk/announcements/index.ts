import axios from 'axios';
import queryString from 'query-string';
import { AnnouncementInterface, AnnouncementGetQueryInterface } from 'interfaces/announcement';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getAnnouncements = async (
  query?: AnnouncementGetQueryInterface,
): Promise<PaginatedInterface<AnnouncementInterface>> => {
  const response = await axios.get('/api/announcements', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createAnnouncement = async (announcement: AnnouncementInterface) => {
  const response = await axios.post('/api/announcements', announcement);
  return response.data;
};

export const updateAnnouncementById = async (id: string, announcement: AnnouncementInterface) => {
  const response = await axios.put(`/api/announcements/${id}`, announcement);
  return response.data;
};

export const getAnnouncementById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/announcements/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteAnnouncementById = async (id: string) => {
  const response = await axios.delete(`/api/announcements/${id}`);
  return response.data;
};
