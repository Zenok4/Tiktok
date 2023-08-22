import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { Wrapper as PoperWrapper } from '~/components/Poper';
import MenuItem from './MenuItem';
import styles from './Menu.module.scss';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(styles);
const defaultFn = () => {};

function Menu({ children, items = [], hideOnClick = false, onChange = defaultFn }) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];

  const renderItems = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children;

      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, item.children]);
            } else {
              onChange(item);
            }
          }}
        />
      );
    });
  };

  const handleBack = () => {
    setHistory((prev) => prev.slice(0, history.length - 1));
  };

  const renderResult = (attrs) => (
    <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
      <PoperWrapper className={cx('menu-popper')}>
        {history.length > 1 && <Header title={current.title} onBack={handleBack} />}
        <div className={cx('menu-body')}>{renderItems()}</div>
      </PoperWrapper>
    </div>
  );

  return (
    <Tippy
      interactive
      delay={[0, 700]}
      offset={[5, 10]}
      hideOnClick={hideOnClick} //Fix bug click on img is hide
      placement="bottom-end"
      render={renderResult}
      onHide={() => setHistory((prev) => prev.slice(0, 1))} //Reset to first layer menu when blur outside
    >
      {children}
    </Tippy>
  );
}

Menu.propTypes = {
  children: PropTypes.node.isRequired,
  items: PropTypes.array,
  hideOnClick: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Menu;
