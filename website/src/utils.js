export const cleanProps = (props) => {
  Object.keys(props).forEach(function (key) {
    if (typeof props[key] === 'undefined' || props[key] === null) {
      delete props[key];
    }
  });
  delete props.validationStates;
  delete props.shadowOnHover;
  delete props.className;
  delete props.iconSize;
  delete props.children;
  delete props.padding;
  delete props.outline;
  delete props.radius;
  delete props.shadow;
  delete props.color;
  delete props.size;
  delete props.icon;
};

