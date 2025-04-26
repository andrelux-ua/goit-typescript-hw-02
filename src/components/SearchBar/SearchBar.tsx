import css from './SearchBar.module.css';
import {
  Formik,
  Form,
  Field,
  ErrorMessage as FormikErrorMessage,
  FormikHelpers,
} from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import { SearchBarProps } from '../../types/types';

interface FormValues {
  searchTopic: string;
}

const validationSchema = Yup.object({
  searchTopic: Yup.string()
    .trim()
    .min(1, 'Please enter a search term')
    .required('Search field cannot be empty'),
});

function SearchBar({ onSubmit }: SearchBarProps) {
  const handleSubmit = (
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) => {
    if (!values.searchTopic.trim()) {
      toast.error('Please enter a search term');
      return;
    }
    onSubmit(values.searchTopic);
    actions.resetForm();
  };

  return (
    <header className={css.header}>
      <Formik<FormValues>
        initialValues={{ searchTopic: '' }}
        validationSchema={validationSchema}
        validateOnBlur={false}
        validateOnChange={false}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className={css.form}>
            <div>
              <Field
                type="text"
                name="searchTopic"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
                className={css.input}
              />
              <button type="submit" className={css.button}>
                Search
              </button>
            </div>

            <div>
              <FormikErrorMessage
                name="searchTopic"
                component="div"
                className={css.errorText}
              />
            </div>
          </Form>
        )}
      </Formik>
    </header>
  );
}

export default SearchBar;

