import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import config from '~/config';
import {
  HomeActiveIcon,
  HomeIcon,
  LiveActiveIcon,
  LiveIcon,
  UserGroupActiveIcon,
  UserGroupIcon,
} from '~/components/Icons';
import SuggestedAccounts from '~/components/SuggestedAccounts';
import * as UserServices from '~/services/UserServices';

const cx = classNames.bind(styles);

const PER_PAGE = 5;

function Sidebar() {
  const [suggestedUser, setSuggestedUser] = useState([]);

  //Suggeted Accounts
  useEffect(() => {
    UserServices.getSuggested({ page: 1, perPage: PER_PAGE })
      .then((data) => {
        setSuggestedUser(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <aside className={cx('wrapper')}>
      <Menu>
        <MenuItem title="For you" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
        <MenuItem
          title="Following"
          to={config.routes.following}
          icon={<UserGroupIcon />}
          activeIcon={<UserGroupActiveIcon />}
        />
        <MenuItem title="Live" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
      </Menu>
      <SuggestedAccounts label="Suggested Accounts" data={suggestedUser} />
      <SuggestedAccounts label="Following Accounts" />
    </aside>
  );
}

export default Sidebar;
