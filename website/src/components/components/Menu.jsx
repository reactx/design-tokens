import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { cleanProps, generateClass } from '../../utils';
import {
  ContextMenu,
  MenuItem,
  ContextMenuTrigger,
  SubMenu,
} from 'react-contextmenu';

const RADIUS = {
  NONE: 'none',
  SMALL: 'small',
  NORMAL: 'normal',
  CURVE: 'curve',
};

const SHADOW = {
  NONE: 'none',
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
};

const MenuComponent = (props) => {
  const menuRef = useRef(null);
  const parentProps = { ...props };
  cleanProps(parentProps);

  return (
    <div ref={menuRef} className={props.rtl && 'reactx-rtl'}>
      <ContextMenuTrigger id={props.id}>
        <div>Right click to see the menu</div>
      </ContextMenuTrigger>
      <ContextMenu
        {...parentProps}
        id={props.id}
        style={{ backgroundColor: props.background }}
        className={generateClass(props, 'Menu')}
      >
        {props.items.map((item, index) => (
          <>
            {!item.children.length ? (
              <MenuItem key={index} data={item.data}>
                <span
                  className={'reactx-menu-item-title'}
                  style={{ color: props.color }}
                >
                  {props.icon && <i className={'reactx-icon ' + item.icon} />}
                  {item.text}
                </span>
                {props.shortcutKey && (
                  <span className="reactx-menu-short-key">{item.shortcut}</span>
                )}
              </MenuItem>
            ) : (
              <SubMenu
                {...parentProps}
                className={generateClass(props, 'SubMenu')}
                style={{ backgroundColor: props.background }}
                title={
                  <>
                    <span
                      className={'reactx-menu-item-title'}
                      style={{ color: props.color }}
                    >
                      {props.icon && (
                        <i className={'reactx-icon ' + item.icon} />
                      )}
                      {item.text}
                    </span>
                    {props.shortcutKey && (
                      <span className="reactx-menu-short-key">
                        {item.shortcut}
                      </span>
                    )}

                    {props.rtl ? (
                      <i className={'reactx-icon nf-icon-FlickRight'}></i>
                    ) : (
                      <i className={'reactx-icon nf-icon-FlickLeft'}></i>
                    )}
                  </>
                }
              >
                {item.children.map((subItem, i) => (
                  <MenuItem key={i} data={subItem.data}>
                    <span
                      className={'reactx-menu-item-title'}
                      style={{ color: props.color }}
                    >
                      {props.icon && (
                        <i className={'reactx-icon ' + subItem.icon} />
                      )}
                      {subItem.text}
                      {props.shortcutKey && (
                        <span className="reactx-menu-short-key">
                          {subItem.shortcut}
                        </span>
                      )}
                    </span>
                  </MenuItem>
                ))}
              </SubMenu>
            )}
            {item.hasDevider && <MenuItem divider />}
          </>
        ))}
      </ContextMenu>
    </div>
  );
};

const Menu = React.forwardRef((props) => <MenuComponent {...props} />);

Menu.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  items: PropTypes.array,
  icon: PropTypes.bool,
  shortcutKey: PropTypes.bool,
  rtl: PropTypes.bool,
  color: PropTypes.string,
  background: PropTypes.string,
  radius: PropTypes.oneOf(Object.values(RADIUS)),
  shadow: PropTypes.oneOf(Object.values(SHADOW)),
};

Menu.defaultProps = {
  radius: RADIUS.NONE,
  shadow: SHADOW.NONE,
  icon: true,
  shortcutKey: true,
};

export { Menu };
