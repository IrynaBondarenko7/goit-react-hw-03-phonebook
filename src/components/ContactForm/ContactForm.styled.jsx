import styled from 'styled-components';
import { Form as FormikForm, ErrorMessage as FormikErrorMessage } from 'formik';
export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  border: 1px solid #212121;
  flex-wrap: wrap;
  width: 400px;
  padding: 20px;
  row-gap: 10px;
  margin-bottom: 20px;
  margin-top: 20px;
`;
export const ErrorMessage = styled(FormikErrorMessage)`
  color: red;
`;
export const StyledTextWrap = styled.span`
  margin-right: 10px;
`;
export const StyledAddContactBtn = styled.button`
  width: 100px;
  padding: 5px;
`;
