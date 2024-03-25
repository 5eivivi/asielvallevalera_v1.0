import './EmailAsContactForm.css'

// Icon
import { MdOutlineEmail } from 'react-icons/md'

// Language.
import { FormattedMessage } from 'react-intl'

export default function EmailAsContactForm () {
  return (
    <article>
      <a className='email-contact-form' href='mailto:avallevalera96@gmail.com' target='_blank' rel='noreferrer'>
        <MdOutlineEmail className='email-icon' />
        <h4>Email</h4>
        <FormattedMessage id='send-email-as-contact-form' defaultMessage='Send a message' />
      </a>
    </article>
  )
}
