import React, { useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import { cleanProps, generateClass } from '../../utils';
import { FluentIcon } from './FluentIcon';

const TabComponent = (props) => {
  const parentProps = { ...props };
  cleanProps(parentProps);
  const tabsRef = useRef(null);

  const scrollTabs = useCallback((direct) => {
    if (direct === 'left') {
      tabsRef.current.scrollLeft = tabsRef.current.scrollLeft - 100;
    } else if (direct === 'right') {
      tabsRef.current.scrollLeft = tabsRef.current.scrollLeft + 100;
    }
  }, []);

  return (
    <div className={generateClass(props, 'tab')} {...parentProps}>
      <div className="nirvana-tabs-section">
        {tabsRef.current?.scrollWidth !== tabsRef.current?.offsetWidth && (
          <div className="nirvana-tab-action">
            <button
              className="nirvana-btn nirvana-p-0"
              onClick={() => scrollTabs('left')}
            >
              <FluentIcon icon="ChevronLeft" iconSize="small" />
            </button>
          </div>
        )}
        <div className="nirvana-tabs" ref={tabsRef}>
          {props.tabList &&
            props.tabList.map((item, index) => (
              <div
                id={item.tabId}
                className={
                  'nirvana-tab-header-item ' +
                  (item.tabId === props.activeTabId
                    ? 'nirvana-active-tab'
                    : '') +
                  (item.color ? ' nirvana-border-top-3-' + item.color : '')
                }
                key={index}
              >
                <span
                  className="nirvana-tab-header-title"
                  data-tooltip={item.name || item.displayName}
                  onAuxClick={(e) => {
                    if (e.button === 1 && deleteTabAction) {
                      props.deleteTabAction(item.tabId);
                    }
                  }}
                  onClick={() => props.selectedItem(item)}
                >
                  {item.default && (
                    <i className="fa fa-star" data-tooltip="Inbox" />
                  )}
                  {item.name || item.displayName}
                </span>
                {props.deleteTabAction && (
                  <span
                    className="nirvana-tab-header-close-btn"
                    data-tooltip="بستن تب"
                    aria-label="بستن تب"
                    onClick={() => props.deleteTabAction(item.tabId)}
                  >
                    <FluentIcon icon="ChromeClose" iconSize="tiny" />
                  </span>
                )}
              </div>
            ))}
        </div>
        {props.addTabAction && (
          <div className="nirvana-tab-action">
            {tabsRef.current?.scrollWidth !== tabsRef.current?.offsetWidth && (
              <button
                className="nirvana-btn nirvana-p-0"
                onClick={() => scrollTabs('right')}
              >
                <FluentIcon icon="ChevronRight" iconSize="small" />
              </button>
            )}
            <button
              className="nirvana-btn nirvana-p-0"
              data-tooltip="تب جدید"
              aria-label="تب جدید"
              onClick={() => props.addTabAction(true)}
            >
              <FluentIcon icon="CirclePlus" />
            </button>
          </div>
        )}
      </div>
      <div className="nirvana-tab-content nirvana-row">{props.children}</div>
    </div>
  );
};

const Tab = React.forwardRef((props) => <TabComponent {...props} />);

Tab.propTypes = {
  id: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node.isRequired, PropTypes.string]),
  title: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  tabList: PropTypes.array,
  activeTabId: PropTypes.string,
  onClick: PropTypes.func,
  deleteTabAction: PropTypes.func,
  addTabAction: PropTypes.func,
};

Tab.defaultProps = {
  disabled: false,
  className: '',
  activeTabId: 1,
};

export { Tab };
