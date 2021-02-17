const delList = [
  'validationStates',
  'shadowOnHover',
  'className',
  'modalType',
  'iconSize',
  'children',
  'username',
  'backdrop',
  'padding',
  'outline',
  'radius',
  'shadow',
  'label',
  'footer',
  'color',
  'header',
  'size',
  'icon',
  'src',
];

export const cleanProps = (props) => {
  Object.keys(props).forEach(function (key) {
    if (typeof props[key] === 'undefined' || props[key] === null) {
      delete props[key];
    }
  });

  delList.map((item) => delete props[item]);
};
