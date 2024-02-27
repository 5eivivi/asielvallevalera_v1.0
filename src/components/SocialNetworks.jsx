import './SocialNetworks.css'

// Icon
import { AiOutlineInstagram as Instagram, AiOutlineLinkedin as LinkedIn } from 'react-icons/ai'
import { VscGithubInverted as GitHub } from 'react-icons/vsc'
// import { FaFacebook as Facebook } from 'react-icons/fa'
// import { RiTwitterXFill as Twitter } from 'react-icons/ri'
// import { TbBrandTiktok as Tiktok } from 'react-icons/tb'
import { BsWhatsapp as WhatsApp } from 'react-icons/bs'
import { MdOutlineEmail as OutlineEmail } from 'react-icons/md'

export const SocialNetworks = () => {
  return (
    <div className='social-networks'>
      <a href='https://www.instagram.com/asielvalle96' title='Instagram' className='icon' target='_blank' rel='noreferrer'><Instagram /></a>
      <a href='https://www.linkedin.com/in/asielvalle96' title='LinkedIn' className='icon' target='_blank' rel='noreferrer'><LinkedIn /></a>
      <a href='https://www.github.com/asielvalle96' title='GitHub' className='icon' target='_blank' rel='noreferrer'><GitHub /></a>
      {/* <a href='https://www.facebook.com/asielvalle96' title='Facebook' className='icon' target='_blank' rel='noreferrer'><Facebook /></a>
      <a href='https://www.twitter.com/asielvalle96' title='Twitter' className='icon' target='_blank' rel='noreferrer'><Twitter /></a> */}
      {/* <a href='https://www.tiktok.com/@asielvalle96' title='TikTok' className='icon' target='_blank' rel='noreferrer'><Tiktok /></a> */}
      <a href='https://api.whatsapp.com/send?phone=+1646687-5312&text=Hello' title='WhatsApp' className='icon' target='_blank' rel='noreferrer'><WhatsApp /></a>
      <a href='mailto:asielvallevalera@gmail.com' title='Email' className='icon' target='_blank' rel='noreferrer'><OutlineEmail /></a>
    </div>
  )
}
