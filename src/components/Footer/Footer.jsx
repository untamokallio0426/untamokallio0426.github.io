import s from './Footer.module.scss';
import { AiFillGithub } from 'react-icons/ai';
import { IoIosMail } from "react-icons/io";
import {
  FaTelegramPlane,
  FaSkype,
} from 'react-icons/fa';

const Footer = () => {
  // let date = new Date();
  // let year = date.getFullYear();

  return (
    <div className={s.footer}>
      <div className={s.container}>
        <div className={s.copyright}>
          <h1>Made with ❤️ by Nguyen Thanhtan</h1>
        </div>

        <div className={s.body}>
          <ul className={s.socialIcons}>
            <li>
              <a
                href="https://github.com/untamokallio0426"
                target="_blank"
                rel="noreferrer"
                aria-label="github"
              >
                <AiFillGithub />
              </a>
            </li>
            <li>
              <a
                href="https://join.skype.com/invite/ItbAIjLQ6YdN"
                target="_blank"
                rel="noreferrer"
                aria-label="facebook"
              >
                <FaSkype />
              </a>
            </li>
            <li>
              <a
                href="https://t.me/untamokallio"
                target="_blank"
                rel="noreferrer"
                aria-label="TelegramPlane"
              >
                <FaTelegramPlane />
              </a>
            </li>
            {/* <li>
              <a
                href="https://www.linkedin.com/in/volodymyr-snaichuk-74a389124/"
                target="_blank"
                rel="noreferrer"
                aria-label="linkedin"
              >
                <FaLinkedinIn />
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
