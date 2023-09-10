import * as yup from 'yup';

export const propertyValidationSchema = yup.object().shape({
  name: yup.string().required(),
  location: yup.string().required(),
  bedrooms: yup.number().integer().required(),
  bathrooms: yup.number().integer().required(),
  organization_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
