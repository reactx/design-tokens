import React from 'react';
import { Datepicker, datepickerProps } from './Datepicker';

export default {
  title: 'Components/Datepicker',
  component: Datepicker,
  argTypes: {
    id: {
      control: 'text',
      table: {
        category: 'Attribute',
      },
    },
    className: {
      control: 'text',
      table: {
        category: 'Attribute',
      },
    },
    calendar: {
      control: 'inline-radio',
      table: {
        category: 'Attribute',
      },
    },
    locale: {
      control: 'inline-radio',
      table: {
        category: 'Attribute',
      },
    },
    type: {
      control: 'inline-radio',
      table: {
        category: 'Attribute',
      },
    },
    mode: {
      control: 'inline-radio',
      table: {
        category: 'Attribute',
      },
    },
    numberOfMonths: {
      control: 'inline-radio',
      table: {
        category: 'Attribute',
      },
    },
    otherPickers: {
      control: 'inline-radio',
      table: {
        category: 'Attribute',
      },
    },
    name: {
      control: 'text',
      table: {
        category: 'Attribute',
      },
    },
    title: {
      control: 'text',
      table: {
        category: 'Attribute',
      },
    },
    placeholder: {
      control: 'text',
      table: {
        category: 'Attribute',
      },
    },
    weekDays: {
      control: 'text',
      table: {
        category: 'Attribute',
      },
    },
    months: {
      control: 'text',
      table: {
        category: 'Attribute',
      },
    },
    format: {
      control: 'text',
      table: {
        category: 'Attribute',
      },
    },
    minDate: {
      control: 'text',
      table: {
        category: 'Attribute',
      },
    },
    maxDate: {
      control: 'text',
      table: {
        category: 'Attribute',
      },
    },
    children: {
      control: 'text',
      table: {
        category: 'Attribute',
      },
    },

    disabled: {
      table: {
        category: 'Attribute',
      },
    },
    editable: {
      table: {
        category: 'Attribute',
      },
    },
    datePanel: {
      table: {
        category: 'Attribute',
      },
    },
    sort: {
      table: {
        category: 'Attribute',
      },
    },
    showOtherDays: {
      table: {
        category: 'Attribute',
      },
    },
    disableMonthPicker: {
      table: {
        category: 'Attribute',
      },
    },
    disableYearPicker: {
      table: {
        category: 'Attribute',
      },
    },
    layout: {
      control: 'inline-radio',
      table: {
        category: 'Style',
      },
    },
    color: {
      control: 'inline-radio',
      table: {
        category: 'Style',
      },
    },
    background: {
      control: 'inline-radio',
      table: {
        category: 'Style',
      },
    },
    calendarPosition: {
      control: 'inline-radio',
      table: {
        category: 'Style',
      },
    },
    animation: {
      table: {
        category: 'Style',
      },
    },
    arrow: {
      table: {
        category: 'Style',
      },
    },
    scrollSensitive: {
      table: {
        category: 'Style',
      },
    },
    hideOnScroll: {
      table: {
        category: 'Style',
      },
    },
    fixMainPosition: {
      table: {
        category: 'Style',
      },
    },
    fixRelativePosition: {
      table: {
        category: 'Style',
      },
    },
    offsetX: {
      control: 'number',
      table: {
        category: 'Style',
      },
    },
    offsetY: {
      control: 'number',
      table: {
        category: 'Style',
      },
    },
    zIndex: {
      control: 'number',
      table: {
        category: 'Style',
      },
    },
    onChange: {
      table: {
        category: 'Action',
      },
    },
    onOpen: {
      table: {
        category: 'Action',
      },
    },
    onClose: {
      table: {
        category: 'Action',
      },
    },
    mapDays: {
      table: {
        category: 'Action',
      },
    },
    onPositionChange: {
      table: {
        category: 'Action',
      },
    },
  },
};

export const Basic = (args: datepickerProps) => <Datepicker {...args} />;
export const customButtons = (args: datepickerProps) => <Datepicker {...args} />;
customButtons.args = {
  children: (
    <>
      <button>Deselect</button>
      <button>Today</button>
    </>
  ),
};
