import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEllipsisVertical,
  faEarthAsia,
  faCircleQuestion,
  faKeyboard,
  faUser,
  faCoins,
  faGear,
  faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import Button from '~/components/Button';
import styles from './Header.module.scss';
import Menu from '~/components/Poper/Menu';
import Image from '~/components/Image';
import 'tippy.js/dist/tippy.css';
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons';
import Search from '../Search';
import config from '~/config';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng việt',
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: 'Feedback and help',
    to: '/feedback',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Keybroard shortcuts',
  },
];

function Header() {
  let currentUser = true;

  const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case 'language':
        //handle
        break;
      default:
    }
  };

  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: 'View Profile',
      to: '/@customer01',
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: 'Get Coin',
      to: '/coin',
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: 'Setting',
      to: '/setting',
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: 'Log out',
      separate: true,
    },
  ];

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <Link to={config.routes.home}>
          <div className={cx('logo')}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="797.73mm"
              viewBox="-58.35000000000002 -186.70564362582354 2548.289756960746 2538.849821747569"
              width="705.56mm"
              className={cx('logo-tiktok')}
            >
              <g fill="#25f4ee">
                <path d="M779.38 890.55v-88.12a650.81 650.81 0 0 0-92.45-7.94c-299.8-.64-565.22 193.64-655.25 479.6S47.92 1871.34 294 2042.56a684.7 684.7 0 0 1 485.36-1152z" />
                <path d="M796 1888.72c167.62-.23 305.4-132.28 312.74-299.74V94.62h273A512.17 512.17 0 0 1 1373.8 0h-373.41v1492.92c-6.21 168.31-144.32 301.63-312.74 301.9a317.76 317.76 0 0 1-144.45-36.11A313.48 313.48 0 0 0 796 1888.72zM1891.66 601.64v-83.06a509.85 509.85 0 0 1-282.4-85.22 517.79 517.79 0 0 0 282.4 168.28z" />
              </g>
              <path
                d="M1609.26 433.36a514.19 514.19 0 0 1-127.84-339.47h-99.68a517.16 517.16 0 0 0 227.52 339.47zM686.93 1167.9a313.46 313.46 0 0 0-144.46 590.81A312.75 312.75 0 0 1 796 1262.51a329.69 329.69 0 0 1 92.44 14.49V897.05a654.77 654.77 0 0 0-92.44-7.22h-16.62v288.9a321.13 321.13 0 0 0-92.45-10.83z"
                fill="#fe2c55"
              />
              <path
                d="M1891.66 601.64v288.91a886.23 886.23 0 0 1-517.86-168.29v759.1c-.8 378.78-308.09 685.43-686.87 685.43A679.65 679.65 0 0 1 294 2042.56 685.43 685.43 0 0 0 1481.42 1576V819.05A887.71 887.71 0 0 0 2000 985.17v-372a529.59 529.59 0 0 1-108.34-11.53z"
                fill="#fe2c55"
              />
              <path d="M1373.8 1481.36v-759.1a886.11 886.11 0 0 0 518.58 166.12v-288.9a517.87 517.87 0 0 1-283.12-166.12 517.16 517.16 0 0 1-227.52-339.47h-273V1589a313.46 313.46 0 0 1-567 171.17 313.46 313.46 0 0 1 144.46-590.83 321.35 321.35 0 0 1 92.45 14.45V894.88A684.71 684.71 0 0 0 293.29 2050.5a679.65 679.65 0 0 0 393.64 116.29c378.78 0 686.07-306.65 686.87-685.43z" />
            </svg>
          </div>
        </Link>

        <Search />

        <div className={cx('action')}>
          {currentUser ? (
            <>
              <Tippy content="Upload video" placement="bottom" delay={[0, 100]}>
                <button className={cx('action-btn')}>
                  <UploadIcon />
                </button>
              </Tippy>

              <Tippy content="Message" placement="bottom" delay={[0, 100]}>
                <button className={cx('action-btn')}>
                  <MessageIcon />
                </button>
              </Tippy>

              <Tippy content="Inbox" placement="bottom" delay={[0, 100]}>
                <button className={cx('action-btn')}>
                  <InboxIcon />
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button text>Upload</Button>
              <Button primary>Log in</Button>
            </>
          )}

          <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
            {currentUser ? (
              <Image
                src="https://i.docln.net/lightnovel/users/ua122971-271991d8-faae-4184-b877-0aa59c9b8b12.jpg"
                className={cx('user-avatar')}
                alt="avt"
              />
            ) : (
              <button className={cx('more-btn')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
