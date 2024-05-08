import './About.css'

// Multi language (Format.JS library).
import { FormattedMessage } from 'react-intl'

import EmailAsContactForm from '../components/EmailAsContactForm.jsx'
import WhatsAppAsContactForm from '../components/WhatsAppAsContactForm.jsx'

// Button "Download CV".
import DownloadCV from '../components/DownloadCV.jsx'

export const About = () => {
  return (
    <section className='about-section' id='about'>
      <div className='container'>
        <article className='about-section__container--header'>
          <h1 className='h1-green-color'><FormattedMessage id='aboutme' defaultMessage='About me' /></h1>
          <p>
            <FormattedMessage id='text-aboutme' defaultMessage='Here you will find more information about me, what I do, if of technology and programming we talk.' />
          </p>
        </article>

        <article className='about-section__container--body'>
          <h2><FormattedMessage id='more-about-me' defaultMessage='More about me' /></h2>
          <p className='text-justify'>
            <FormattedMessage
              id='paragraph-more-about-me'
              defaultMessage='I develop the Frontend of Websites and Web Applications. I build successful products.
                              Check out some of my work in the {Projects} section.
                              I also develop the Backend for Web Applications.
                              I have abilities using the technologies that I show in the {Skills} section.
                              I enjoy spending time with people and talking about technology.
                              Feel free to connect with me or follow me on {LinkedIn}, where you will find more information about me.
                              I am open to job opportunities where I can contribute, learn and grow.
                              If you have a good opportunity that matches my skills, then do not hesitate to {contactMe}.'
              values={
                {
                  Projects: <a href='#projects' className='link-in-more-about-me'><FormattedMessage id='projects-in-more-about-me' defaultMessage='Projects' /></a>,
                  Skills: <a href='#skills' className='link-in-more-about-me'><FormattedMessage id='skills-in-more-about-me' defaultMessage='Skills' /></a>,
                  LinkedIn: <a href='https://www.linkedin.com/in/asielvalle96' rel='noreferrer' target='_blank' className='link-in-more-about-me'>LinkedIn</a>,
                  contactMe: <a href='mailto:avallevalera96@gmail.com' className='link-in-more-about-me'><FormattedMessage id='contactme-in-more-about-me' defaultMessage='contact me' /></a>
                }
              }
            />
          </p>

          <DownloadCV />
        </article>

        <article className='email-and-whatsapp-on-about'>
          <EmailAsContactForm />
          <WhatsAppAsContactForm />
        </article>
      </div>
    </section>
  )
}
