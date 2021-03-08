import React from 'react';
import PropTypes from 'prop-types';
import { cleanProps, generateClass } from '../../utils';

const TimeLineComponent = (props) => {
  const parentProps = { ...props };
  cleanProps(parentProps);

  return (
    <div {...parentProps} className={generateClass(props, 'timeline')}>
      {props.items.map((item, index) => (
        <div key={index} className="timeline-item">
          <div className="timeline-date">{item.date}</div>
          <div className="timeline-data">
            <div className="timeline-title">{item.title}</div>
            <div className="timeline-description">{item.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

const TimeLine = React.forwardRef((props) => <TimeLineComponent {...props} />);

TimeLine.propTypes = {
  id: PropTypes.string,
  items: PropTypes.array,
  className: PropTypes.string,
};

TimeLine.defaultProps = {
  className: '',
};

export { TimeLine };
