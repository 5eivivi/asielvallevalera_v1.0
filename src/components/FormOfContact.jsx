import './FormOfContact.css'
// Language.
import { FormattedMessage } from 'react-intl'
// Custom Hook
// import { useSendEmail } from '../hooks/useSendEmail.jsx'

// Validate the form.
import { useForm } from 'react-hook-form'

export const FormOfContact = () => {
  // const { form, sendEmail } = useSendEmail() // Custom Hook.
  const { register, formState: { errors }, handleSubmit } = useForm()

  const onSubmit = handleSubmit((data) => {
    console.log('form data: ', data)
  })

  return (
    <article className='formofcontact-container'>
      {/* <form ref={form} onSubmit={sendEmail} className='formofcontact-container_form'> */}
      <form onSubmit={onSubmit} className='formofcontact-container_form'>
        <div>
          <label><FormattedMessage id='form-label-name' defaultMessage='Please, type your full name' /></label>
          <input
            type='text'
            {...register('name', { required: true })}
          />

        </div>
        {errors.name && (
          <p style={{ color: 'red' }}>First name is required</p>
        )}

        <div>
          <label><FormattedMessage id='form-label-email' defaultMessage='Please, type your email' /></label>
          <input
            autoFocus type='email' {...register('email', { required: 'Email Address is required' })}
            aria-invalid={errors.mail ? 'true' : 'false'}
          />
          {errors.email && <p role='alert'>{errors.mail.message}</p>}
        </div>

        <div>
          <label><FormattedMessage id='form-label-message' defaultMessage='Please, type your message' /></label>
          <textarea rows='10' {...register('message', { required: true })} />
          {errors.message && (
            <p style={{ color: 'red' }}>First name is required</p>
          )}
        </div>

        <button type='submit' className='formofcontact-container_form--button'><FormattedMessage id='form-button' defaultMessage='Send Message' /></button>
      </form>
    </article>
  )
}
