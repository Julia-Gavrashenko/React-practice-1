import styled from 'styled-components';
import { Form as FormikForm, ErrorMessage as FormikError } from 'formik';

export const Form = styled(FormikForm)`

  width: 400px;
  padding: 8px;
  border: 1px solid #2a2a2a;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 80px;
  margin-bottom: 80px;
`;

export const FormField = styled.label`
  display: flex;
  flex-direction: column;
`;

export const ErrorMessage = styled(FormikError)`
  color: green;
`