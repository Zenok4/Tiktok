import classNames from 'classnames/bind';
import styles from './home.module.scss';
import * as UserServices from '~/services/UserServices';
import { useEffect, useState } from 'react';
import SuggestedVideo from '~/components/SuggestedVideo';

const cx = classNames.bind(styles);

function Home() {
  const [getVideo, setGetVideo] = useState([]);

  useEffect(() => {
    UserServices.getVideo({ type: 'for-you', page: 1 })
      .then((data) => {
        setGetVideo(data);
      })
      .catch((error) => console.log(error));
  });

  return (
    <div className={cx('wrapper')}>
      <SuggestedVideo data={getVideo} />
    </div>
  );
}

export default Home;
