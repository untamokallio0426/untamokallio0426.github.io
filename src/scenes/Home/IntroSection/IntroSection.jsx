import s from './IntroSection.module.scss';
import avatar from '../../../assets/avatar.svg';
import { AiFillGithub } from 'react-icons/ai';
import { IoIosMail } from "react-icons/io";
import {
  FaTelegramPlane,
  FaSkype,
} from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import About from '../../About/About';
const IntroSection = () => {
  return (
    <section className={s.content}>
      <div className={s.introduction}>
        <div className={s.introductionText}>
          <h1 className={s.title}>
            LET ME <span className={s.purple}> INTRODUCE </span>{' '}
            MYSELF
          </h1>

          <div className={s.description}>
            <p>
              I’m a Full Stack / Blockchain / Casino Game Developer from Vietnam<br/>
              Accomplished Full Stack Developer with 8+ yearsof experience<br/>
              Skilled in creating, testing, and deploying web applicationusingthelatest tools and technologies<br/>
              Excellent problem-solvingandcommunication skills<br/>
              Always try and keep the pace with the brand-newfieldanddiginto <br/>cutting-edge technology
              Feel free to ask anything, I am here to help you
            </p>

            <p>
              My skills include proficiency in{' '}<br/>
              <i>
                <b className={s.purple}>
                Node, Express, Nest, Laravel, Yii, CodeIgniter<br/>
                React, Angular, Vue, Next, Nuxt, Svelte<br/>
                Java, Kotlin, Swift, Flutter, React Native<br/>
                RESTful API, GraphQL<br/>
                MySQL, PostgreSQL, MSSQL, SQLite, MongoDB, Redis<br/>
                Blockchain, Ethereum, Solidity, NFT marketplace, Smart Contract, Web3.js<br/>
                AWS, Azure, Google Cloud<br/>
                Ubuntu, Apache, Nginx<br/>
                API Development, API Integration
                </b>
              </i>
              <br />
              and other relevant technologies. I have experience in
              integrating various <br />
              third-party libraries, API integration, push
              notifications and analytics.
            </p>

            <p>
              My field of Interest's are building new
              <i>
                <b className={s.purple}> Technologies and Products</b>
              </i>
            </p>
          </div>
        </div>

        <Tilt trackOnWindow={true}>
          <LazyLoadImage alt="avatar" effect="blur" src={avatar} />
          {/* <LazyLoadImage alt="avatar" effect="blur" src="/NguyenThanhTan.png" /> */}
        </Tilt>
      </div>
      <About/>
      <div className={s.introSocial}>
        <h1>FIND ME ON</h1>
        <p>
          Feel free to <span className={s.purple}>connect </span>with
          me
        </p>
        <ul className={s.socialLinks}>
          <li className={s.socialLink}>
            <a
              href="https://github.com/untamokallio0426"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="github"
            >
              <AiFillGithub />
            </a>
          </li>
          {/* <li className={s.socialLink}>
            <a
              href="https://www.facebook.com/Snaychuk"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="facebook"
            >
              <IoIosMail />
            </a>
          </li> */}
          <li className={s.socialLink}>
            <a
              href="https://join.skype.com/invite/ItbAIjLQ6YdN"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="skype"
            >
              <FaSkype />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="https://t.me/untamokallio"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="telegram"
            >
              <FaTelegramPlane />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default IntroSection;
