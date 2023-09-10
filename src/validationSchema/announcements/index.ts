import * as yup from 'yup';

export const announcementValidationSchema = yup.object().shape({
  title: yup.string().required(),
  content: yup.string().required(),
  date_posted: yup.date().required(),
  property_id: yup.string().nullable().required(),
  platform_id: yup.string().nullable().required(),
});
