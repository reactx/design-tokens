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

const Colors = [
  'primary',
  'success',
  'info',
  'danger',
  'warning',
  'purple',
  'dark',
  'gray',
  'light',
];

export default {
  title: 'Utility/Color Pallet',
};

export const Basic = () => (
  <>
    {Colors.map((color, indexColor) => (
      <React.Fragment key={indexColor}>
        <div className="nirvana-row nirvana-pallet">
          {ColorMode.map((mode, index) => (
            <div
              key={index}
              className="nirvana-column col-auto"
              style={{
                backgroundColor: 'var(--nirvana-' + color + mode + ')',
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
