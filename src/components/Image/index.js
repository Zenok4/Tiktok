import PropTypes from 'prop-types';
import { useState, forwardRef } from 'react';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import vid from '~/assets/video';
import styles from './Image.module.scss';

const cx = classNames.bind(styles);

const Image = forwardRef(
  (
    {
      src,
      alt,
      className,
      fallback: customFallback = images.noImage,
      avatar = false,
      video = false,
      width = '200',
      height = '600',
      ...props
    },
    ref,
  ) => {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
      setFallback(customFallback);
    };

    const classes = cx('wrapper', {
      [className]: className,
      avatar,
      video,
    });

    return video ? (
      <video
        width={width}
        height={height}
        className={classes}
        ref={ref}
        {...props}
        onError={handleError}
        controls
        autoPlay
      >
        <source src={vid.noVid || src} />
      </video>
    ) : (
      <img className={classes} ref={ref} src={fallback || src} alt={alt} {...props} onError={handleError} />
    );
  },
);

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  className: PropTypes.string,
  fallback: PropTypes.string,
};

export default Image;
