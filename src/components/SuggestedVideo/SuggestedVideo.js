import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedVideo.module.scss';
import VideoItem from './VideoItem';

const cx = classNames.bind(styles);

function SuggestedVideo({ data = [] }) {
  return (
    <div className={cx('wrapper')}>
      {data.map((account) => (
        <VideoItem key={account.id} data={account} />
      ))}
    </div>
  );
}

SuggestedVideo.propTypes = {
  data: PropTypes.array,
};

export default SuggestedVideo;
