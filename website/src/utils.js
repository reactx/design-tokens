const delList = [
  'validationStates',
  'shadowOnHover',
  'className',
  'modalType',
  'iconSize',
  'children',
  'username',
  'itemRadius',
  'itemColor',
  'backdrop',
  'padding',
  'outline',
  'theme',
  'radius',
  'shadow',
  'label',
  'tabList',
  'line',
  'animation',
  'footer',
  'color',
  'header',
  'size',
  'icon',
  'src',
  'items',
];

const COLOR = {
  PRIMARY: 'primary',
  SUCCESS: 'success',
  DANGER: 'danger',
  WARNING: 'warning',
  INFO: 'info',
  DARK: 'dark',
  LIGHT: 'light',
};

const RADIUS = {
  NONE: 'none',
  SMALL: 'small',
  NORMAL: 'normal',
  CURVE: 'curve',
  PILL: 'pill',
};

const SHADOW = {
  NONE: 'none',
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
};

const SIZE = {
  TINY: 'tiny',
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  EXTRA: 'extra',
};

const LOADING_SIZE = {
  small: 'tiny',
  medium: 'small',
  large: 'medium',
  extra: 'large',
};

const VALIDATION = {
  NONE: 'none',
  VALID: 'valid',
  INVALID: 'invalid',
};

export const cleanProps = (props) => {
  Object.keys(props).forEach(function (key) {
    if (typeof props[key] === 'undefined' || props[key] === null) {
      delete props[key];
    }
  });

  delList.map((item) => delete props[item]);
};

export const generateClass = (prop, baseName) => {
  let classList = [];
  //BASE COMPONENT CLASS
  classList.push('nirvana-' + baseName);
  //EXTRA CLASS_NAME
  prop.className && classList.push(prop.className);
  //RADIUS
  if (prop.radius && prop.radius !== RADIUS.NORMAL) {
    classList.push('radius-' + prop.radius);
  }
  //SHADOW
  if (prop.shadow && prop.shadow !== SHADOW.NONE) {
    classList.push('shadow-' + prop.shadow);
  }
  //SIZE
  if (prop.size && prop.size !== SIZE.MEDIUM) {
    classList.push(baseName + '-size-' + prop.size);
  }
  //OUTLINE AND COLOR
  if (prop.outline && prop.color) {
    classList.push('border-1 nirvana-color-' + prop.color);
  } else if (prop.color) {
    classList.push('nirvana-' + baseName + '-' + prop.color);
  }
  //VALIDATION
  if (prop.validationStates && prop.validationStates !== 'none') {
    classList.push('nirvana-input-' + prop.validationStates);
  }
  //THEME
  if (prop.theme) {
    classList.push(prop.theme);
  }

  return classList.join(' ');
};
