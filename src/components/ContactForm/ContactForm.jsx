import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import {
  ErrorMessage,
  Form,
  StyledAddContactBtn,
  StyledTextWrap,
} from './ContactForm.styled';

const ContactsSchema = Yup.object().shape({
  name: Yup.string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Invalid name'
    )
    .required(),
  number: Yup.number().required(),
});

export const ContactForm = ({ addContact, contacts }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={ContactsSchema}
      onSubmit={(values, { resetForm }) => {
        const contactsArray = contacts.filter(
          contact => contact.name === values.name
        );

        if (contactsArray.length !== 0) {
          alert(`${values.name} is alredy in contacts`);
          return;
        }
        addContact({ ...values, id: nanoid() });
        resetForm({ values: { name: '', number: '' } });
      }}
    >
      <Form>
        <label htmlFor="">
          <StyledTextWrap>Name</StyledTextWrap>

          <Field
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <ErrorMessage name="name" component="div" />
        <label>
          <StyledTextWrap>Number</StyledTextWrap>

          <Field
            type="tel"
            name="number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <ErrorMessage name="number" component="div" />

        <StyledAddContactBtn type="submit">Add contact</StyledAddContactBtn>
      </Form>
    </Formik>
  );
};
