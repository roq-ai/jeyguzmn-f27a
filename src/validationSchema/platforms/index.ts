import * as yup from 'yup';

export const platformValidationSchema = yup.object().shape({
  name: yup.string().required(),
  url: yup.string().required(),
  api_key: yup.string().required(),
  api_secret: yup.string().required(),
  organization_id: yup.string().nullable().required(),
});
