export const cleanProps = (props) => {
  Object.keys(props).forEach(function (key) {
    if (typeof props[key] === 'undefined' || props[key] === null) {
      delete props[key];
    }
  });
  delete props.validationStates;
  delete props.className;
  delete props.children;
  delete props.outline;
  delete props.radius;
  delete props.shadow;
  delete props.color;
  delete props.size;
};

