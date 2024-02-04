import './Skills.css'
// Multilanguage (Format.JS library).
import { FormattedMessage } from 'react-intl'
// icons.
import { RiCodeSSlashFill } from 'react-icons/ri'
import { BiCodeCurly } from 'react-icons/bi'
import { MdOutlineDesignServices } from 'react-icons/md'
import { VscLibrary, VscTools } from 'react-icons/vsc'
// Images.
import html5Icon from '../assets/html5.png'
import css3Icon from '../assets/css3.png'
import jsIcon from '../assets/js.png'
import reactIcon from '../assets/react.png'
import nodejsIcon from '../assets/nodejs.png'
import expressJS from '../assets/expressJS.png'
import mongodbIcon from '../assets/mongodb.svg'
import PostgreSQL from '../assets/postgresql.png'
import figma from '../assets/figma.png'
import reactIconLibrary from '../assets/react-icon.svg'
import FormatJS from '../assets/FormatJS.svg'
import EmailJS from '../assets/emailJS.png'
import postman from '../assets/postman.png'
import git from '../assets/git.png'
import github from '../assets/GitHub.png'
import vscode from '../assets/vscode.png'
import docker from '../assets/docker.png'

export const Skills = () => {
  return (
    <section className='skills-section skills-margin-bottom' id='skills'>
      <div className='container'>
        <div className='skills-section__container--header'>
          <h1 className='h1-green-color'><FormattedMessage id='my-skills' defaultMessage='My skills' /></h1>
          <p>
            <FormattedMessage id='text-skills' defaultMessage='Here are my skills, separated into groups.' />
          </p>
        </div>
        <div className='skills-section__container--body'>
          <article>
            <div className='icon group-name'>
              <RiCodeSSlashFill />
              <span className='icon-text'><FormattedMessage id='skills-frontend-development' defaultMessage='Frontend Development' /></span>
            </div>
            <div className='imgs-of-the-tech'>
              <div className='tech-and-name'>
                <img src={html5Icon} alt='HTML5 img' />
                <p>HTML5</p>
              </div>
              <div className='tech-and-name'>
                <img src={css3Icon} alt='CSS3 img' />
                <p>CSS3</p>
              </div>
              <div className='tech-and-name'>
                <img src={jsIcon} alt='JS img' />
                <p>JavaScript</p>
              </div>
              <div className='tech-and-name'>
                <img src={reactIcon} alt='React img' />
                <p>React</p>
              </div>
            </div>
          </article>
          <article>
            <div className='icon group-name'>
              <BiCodeCurly />
              <span className='icon-text'><FormattedMessage id='skills-backend-development' defaultMessage='Backend Development' /></span>
            </div>
            <div className='imgs-of-the-tech'>
              <div className='tech-and-name'>
                <img src={nodejsIcon} alt='NodeJS img' />
                <p>NodeJS</p>
              </div>
              <div className='tech-and-name'>
                <img src={expressJS} alt='ExpressJS img' />
                <p>ExpressJS</p>
              </div>
              <div className='tech-and-name'>
                <img src={mongodbIcon} alt='MongoDB img' />
                <p>MongoDB</p>
              </div>
              <div className='tech-and-name'>
                <img src={PostgreSQL} alt='PostgreSQL img' />
                <p>PostgreSQL</p>
              </div>
            </div>
          </article>
          <article>
            <div className='icon group-name'>
              <MdOutlineDesignServices />
              <span className='icon-text'><FormattedMessage id='skills-design' defaultMessage='UI / UX Design' /></span>
            </div>
            <div className='imgs-of-the-tech'>
              <div className='tech-and-name'>
                <img src={figma} alt='Figma img' />
                <p>Figma</p>
              </div>
            </div>
          </article>
          <article>
            <div className='icon group-name'>
              <VscLibrary />
              <span className='icon-text'><FormattedMessage id='libraries' defaultMessage='Libraries' /></span>
            </div>
            <div className='imgs-of-the-tech'>
              <div className='tech-and-name'>
                <img src={reactIconLibrary} alt='React-icon img' />
                <p>React-icons</p>
              </div>
              <div className='tech-and-name'>
                <img src={FormatJS} alt='FormatJS img' />
                <p>Format.JS</p>
              </div>
              <div className='tech-and-name'>
                <img src={EmailJS} alt='EmailJS img' />
                <p>EmailJS</p>
              </div>
            </div>
          </article>
          <article>
            <div className='icon group-name'>
              <VscTools />
              <span className='icon-text'><FormattedMessage id='tools' defaultMessage='Tools' /></span>
            </div>
            <div className='imgs-of-the-tech'>
              <div className='tech-and-name'>
                <img src={postman} alt='Postman img' />
                <p>Postman</p>
              </div>
              <div className='tech-and-name'>
                <img src={git} alt='Git img' />
                <p>Git</p>
              </div>
              <div className='tech-and-name'>
                <img src={github} alt='GitHub img' />
                <p>GitHub</p>
              </div>
              <div className='tech-and-name'>
                <img src={vscode} alt='Visual Studio Code img' />
                <p>Visual Studio Code</p>
              </div>
              <div className='tech-and-name'>
                <img src={docker} alt='Docker img' />
                <p>Docker</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
