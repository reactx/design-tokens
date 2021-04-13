const delList = [
  'validationStates',
  'shadowOnHover',
  'className',
  'modalType',
  'iconSize',
  'children',
  'stepMode',
  'username',
  'itemRadius',
  'formControlStyle',
  'subChildren',
  'toggleChildren',
  'defaultText',
  'closeAction',
  'like',
  'isReplayed',
  'replay',
  'showDuration',
  'itemColor',
  'validMessage',
  'body',
  'invalidMessage',
  'backdrop',
  'justifyContent',
  'alignItem',
  'prepend',
  'multiLine',
  'fixIcon',
  'append',
  'padding',
  'brand',
  'menu',
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
  'background',
  'header',
  'size',
  'sizeMd',
  'sizeLg',
  'icon',
  'description',
  'src',
  'items',
  'default'
];

export const cleanProps = (props) => {
  Object.keys(props).forEach(function (key) {
    if (typeof props[key] === 'undefined' || props[key] === null) {
      delete props[key];
    }
  });

  delList.map((item) => delete props[item]);
};

export type IGenerateClassList = {
  className?: string,
  radius?: string,
  shadow?: string,
  size?: string,
  background?: string,
  outline?: boolean,
  color?: string,
  validationStates?: string,
  theme?: string,
}

export function generateClass(prop: IGenerateClassList, baseName: string): string {
  let classList = [];
  //BASE COMPONENT CLASS
  classList.push('reactx-' + baseName);
  //EXTRA CLASS_NAME
  prop.className && classList.push(prop.className);
  //RADIUS
  if (prop.radius && prop.radius !== "normal") {
    classList.push('radius-' + prop.radius);
  }
  //SHADOW
  if (prop.shadow && prop.shadow !== "none") {
    classList.push('shadow-' + prop.shadow);
  }
  //SIZE
  if (prop.size && prop.size !== "medium") {
    classList.push(baseName + '-size-' + prop.size);
  }
  //BACKGROUND
  if (prop.background && prop.background !== "normal") {
    classList.push(baseName + '-background-' + prop.background);
  }
  //OUTLINE AND COLOR
  if (prop.outline && prop.color) {
    classList.push('outline reactx-color-' + prop.color);
  } else if (
    prop.color &&
    prop.color !== "none" &&
    prop.color !== "normal"
  ) {
    classList.push('reactx-' + baseName + '-' + prop.color);
  }
  //VALIDATION
  if (prop.validationStates && prop.validationStates !== 'none') {
    classList.push('reactx-' + baseName + '-' + prop.validationStates);
  }
  //THEME
  if (prop.theme) {
    classList.push(prop.theme);
  }
  return classList.join(' ');
};
