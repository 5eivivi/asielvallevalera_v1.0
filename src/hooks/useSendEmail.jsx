// Send email from the form of contact using EmailJS.
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

export const useSendEmail = () => {
  // Send email from the form of contact EmailJS.
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_pnxixji', 'template_d4gxzln', form.current, 'zvl5GZHCrQSZJUBxE')
      .then((result) => {
        console.log(result.text)
        e.target.reset()
        alert('Message sent successfully.')
      }, (error) => {
        console.log(error.text)
      })
  }

  return { form, sendEmail }
}
