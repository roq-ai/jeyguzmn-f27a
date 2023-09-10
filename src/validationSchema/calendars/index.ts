import * as yup from 'yup';

export const calendarValidationSchema = yup.object().shape({
  date: yup.date().required(),
  status: yup.string().required(),
  property_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
