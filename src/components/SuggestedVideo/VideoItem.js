import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedVideo.module.scss';
import Image from '../Image';

const cx = classNames.bind(styles);

function VideoItem({ data }) {
  return (
    <div className={cx('home-page-layout')}>
      <Image className={cx('video')} video src={data.file_url} />
      <div className={cx('info-vid')}>
        <strong className={cx('nickname')}>{data.nickname}</strong>
        <span className={cx('description')}>{data.description}</span>
        <Image src={data.avatar} avatar />
      </div>
    </div>
  );
}

VideoItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default VideoItem;
