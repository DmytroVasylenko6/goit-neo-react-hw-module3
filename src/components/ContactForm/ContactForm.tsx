import { nanoid } from 'nanoid'
import { Formik, Form as FormikForm } from 'formik'
import * as Yup from 'yup'
import Input from '../Input'
import Button from '../Button'
import s from './ContactForm.module.css'

interface ContactFormData {
  name: string
  number: string
}

interface ContactFormProps {
  Submit: (data: ContactFormData) => void
}

const ContactForm = ({ Submit }: ContactFormProps) => {
  const inputNameId = nanoid()
  const inputNumberId = nanoid()

  const initialValues: ContactFormData = {
    name: '',
    number: ''
  }

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Name must be at least 3 characters')
      .max(50, 'Name must be less than 50 characters')
      .required('Name is required'),
    number: Yup.string()
      .min(3, 'Number must be at least 3 characters')
      .max(50, 'Number must be less than 50 characters')
      .matches(/^\+?[0-9]{10,15}$/, 'Invalid phone number format')
      .required('Number is required')
  })

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        Submit(values)
        resetForm()
      }}
    >
      {({ values, handleChange, errors, touched }) => (
        <FormikForm className={s.form}>
          <Input
            label="Name"
            type="text"
            name="name"
            value={values.name}
            id={inputNameId}
            placeholder="Enter name..."
            onChange={handleChange}
            error={touched.name && errors.name}
          />

          <Input
            label="Number"
            type="tel"
            name="number"
            value={values.number}
            id={inputNumberId}
            placeholder="+380990101010"
            onChange={handleChange}
            pattern="^\+?[0-9]{10,15}$"
            error={touched.number && errors.number}
          />

          <Button text={'Add contact'} type={'submit'} color={'blue'} />
        </FormikForm>
      )}
    </Formik>
  )
}

export default ContactForm
