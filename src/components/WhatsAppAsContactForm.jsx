import './WhatsAppAsContactForm.css'

// Icon
import { BsWhatsapp } from 'react-icons/bs'

// Language.
import { FormattedMessage } from 'react-intl'

export default function WhatsAppAsContactForm () {
  return (
    <article>
      <a className='whatsapp-contact-form' href='https://api.whatsapp.com/send?phone=+17132130648&text=Hello' target='_blank' rel='noreferrer'>
        <BsWhatsapp className='whatsapp-icon' />
        <h4>WhatsApp</h4>
        <FormattedMessage id='send-whatsapp-as-contact-form' defaultMessage='Send a message' />
      </a>
    </article>
  )
}
