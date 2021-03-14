import React from 'react';

const ColorMode = [
  '-lightest',
  '-lighter',
  '-light',
  '',
  '-dark',
  '-darker',
  '-darkest',
];

const colorList = ['primary', 'success', 'info', 'danger', 'warning', 'gray'];

export default {
  title: 'Utility/Colors',
};

export const Basic = () => (
  <>
    {colorList.map((color, indexColor) => (
      <React.Fragment key={indexColor}>
        <div className="reactx-row reactx-pallet">
          {ColorMode.map((mode, index) => (
            <div
              key={index}
              className="reactx-column col-auto"
              style={{
                backgroundColor: 'var(--reactx-' + color + mode + ')',
                height: '10px',
              }}
            >
              {color + mode}
            </div>
          ))}
        </div>
      </React.Fragment>
    ))}
  </>
);
