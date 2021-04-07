import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { cleanProps, generateClass } from '../../utils';
import DatePicker, { Calendar } from 'react-multi-date-picker';
import 'react-multi-date-picker/styles/layouts/prime.css';
import 'react-multi-date-picker/styles/layouts/mobile.css';
import 'react-multi-date-picker/styles/colors/green.css';
import 'react-multi-date-picker/styles/colors/red.css';
import 'react-multi-date-picker/styles/colors/yellow.css';
import 'react-multi-date-picker/styles/colors/purple.css';
import 'react-multi-date-picker/styles/colors/teal.css';
import 'react-multi-date-picker/styles/backgrounds/bg-dark.css';
import 'react-multi-date-picker/styles/backgrounds/bg-gray.css';
import 'react-multi-date-picker/styles/backgrounds/bg-brown.css';
import DatePanel from 'react-multi-date-picker/plugins/date_panel';

const CALENDARTYPE = {
  GREGORIAN: 'gregorian',
  PERSIAN: 'persian',
  ARABIC: 'arabic',
  INDIAN: 'indian',
};

const LOCALE = {
  FA: 'fa',
  EN: 'en',
  AR: 'ar',
  HI: 'hi',
};

const TYPES = {
  INPUT: 'input',
  INPUTICON: 'input-icon',
  BUTTON: 'button',
  ICON: 'icon',
  CALENDAR: 'calendar',
};

const MODE = {
  SINGLE: 'single',
  MULTIPLE: 'multiple',
  RANGE: 'range',
};

const NUMBEROFMONTHS = {
  ONE: 1,
  TWO: 2,
  THREE: 3,
};

const OTHERPICKERS = {
  DISABLE: 'disable',
  TIMEPICKER: 'timePicker',
  ONLYTIMEPICKER: 'onlyTimePicker',
  ONLYMONTHPICKER: 'onlyMonthPicker',
  ONLYYEARPICKER: 'onlyYearPicker',
};

const LAYOUT = {
  DEFAULT: 'default',
  PRIME: 'rmdp-prime',
  MOBILE: 'rmdp-mobile',
};

const COLORS = {
  GREEN: 'green',
  RED: 'red',
  YELLOW: 'yellow',
  PURPLE: 'purple',
  TEAL: 'teal',
};

const BACKGROUNDS = {
  BGDARK: 'bg-dark',
  BGGRAY: 'bg-gray',
  BGBROWN: 'bg-brown',
};

const CALENDARPOSITION = {
  BottomLeft: 'bottom-left',
  BottomCenter: 'bottom-center',
  BottomRight: 'bottom-right',
  TopLeft: 'top-left',
  TopCenter: 'top-center',
  RightTop: 'right-top',
  RightCenter: 'right-center',
  RightBottom: 'right-bottom',
  LeftTop: 'left-top',
  LeftCenter: 'left-center',
  LeftBottom: 'left-bottom',
};

const CalendarComponent = (props) => {
  const [picker, setPicker] = useState({});
  const [mode, setMode] = useState({});
  const [numberOfMonths, setNumberOfMonths] = useState(1);
  const [dayName, setDayName] = useState([]);
  const [monthName, setMonthName] = useState([]);
  const [digitName, setDigitName] = useState([]);
  const parentProps = { ...props };
  cleanProps(parentProps);

  useEffect(() => {
    if (props.numberOfMonths) setNumberOfMonths(parseInt(props.numberOfMonths));
    if (props.weekDays) setDayName(JSON.parse('[' + props.weekDays + ']'));
    if (props.months) setMonthName(JSON.parse('[' + props.months + ']'));
    if (props.digits) setDigitName(JSON.parse('[' + props.digits + ']'));
    if (props.mode) {
      switch (props.mode) {
        case 'multiple':
          setMode({
            multiple: true,
          });
          break;
        case 'range':
          setMode({
            range: true,
          });
          break;
        default:
          break;
      }
    }
    if (props.otherPickers) {
      switch (props.otherPickers) {
        case 'timePicker':
          setPicker({
            timePicker: true,
          });
          break;
        case 'onlyTimePicker':
          setPicker({
            onlyTimePicker: true,
          });
          break;
        case 'onlyMonthPicker':
          setPicker({
            onlyMonthPicker: true,
          });
          break;
        case 'onlyYearPicker':
          setPicker({
            onlyYearPicker: true,
          });
          break;
        default:
          break;
      }
    }
  }, [
    props.mode,
    props.otherPickers,
    props.numberOfMonths,
    props.weekDays,
    props.months,
    props.digits,
  ]);

  return (
    <>
      {props.type !== 'calendar' ? (
        <DatePicker
          className={
            generateClass(props, 'datepicker') +
            ' ' +
            props.color +
            ' ' +
            props.background +
            ' ' +
            props.layout
          }
          {...parentProps}
          {...picker}
          {...mode}
          numberOfMonths={numberOfMonths}
          plugins={props.datePanel ? [<DatePanel />] : []}
          animation={props.animation}
          weekDays={dayName}
          months={monthName}
          digits={digitName}
        >
          {props.children}
        </DatePicker>
      ) : (
        <Calendar
          className={
            generateClass(props, 'calendar') +
            ' ' +
            props.color +
            ' ' +
            props.background +
            ' ' +
            props.layout
          }
          {...parentProps}
          {...picker}
          {...mode}
          numberOfMonths={numberOfMonths}
          plugins={props.datePanel ? [<DatePanel />] : []}
          weekDays={dayName}
          months={monthName}
          digits={digitName}
        >
          {props.children}
        </Calendar>
      )}
    </>
  );
};

const Datepicker = React.forwardRef((props) => (
  <CalendarComponent {...props} />
));

Datepicker.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  calendar: PropTypes.oneOf(Object.values(CALENDARTYPE)),
  locale: PropTypes.oneOf(Object.values(LOCALE)),
  type: PropTypes.oneOf(Object.values(TYPES)),
  mode: PropTypes.oneOf(Object.values(MODE)),
  numberOfMonths: PropTypes.oneOf(Object.values(NUMBEROFMONTHS)),
  otherPickers: PropTypes.oneOf(Object.values(OTHERPICKERS)),
  name: PropTypes.string,
  title: PropTypes.string,
  placeholder: PropTypes.string,
  weekDays: PropTypes.arrayOf(PropTypes.string),
  months: PropTypes.arrayOf(PropTypes.string),
  digits: PropTypes.arrayOf(PropTypes.string),
  format: PropTypes.string,
  minDate: PropTypes.string,
  maxDate: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.node),
  disabled: PropTypes.bool,
  editable: PropTypes.bool,
  datePanel: PropTypes.bool,
  sort: PropTypes.bool,
  showOtherDays: PropTypes.bool,
  disableMonthPicker: PropTypes.bool,
  disableYearPicker: PropTypes.bool,
  layout: PropTypes.oneOf(Object.values(LAYOUT)),
  color: PropTypes.oneOf(Object.values(COLORS)),
  background: PropTypes.oneOf(Object.values(BACKGROUNDS)),
  calendarPosition: PropTypes.oneOf(Object.values(CALENDARPOSITION)),
  animation: PropTypes.bool,
  arrow: PropTypes.bool,
  scrollSensitive: PropTypes.bool,
  hideOnScroll: PropTypes.bool,
  fixMainPosition: PropTypes.bool,
  fixRelativePosition: PropTypes.bool,
  offsetX: PropTypes.number,
  offsetY: PropTypes.number,
  zIndex: PropTypes.number,
  onChange: PropTypes.func,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  mapDays: PropTypes.func,
  onPositionChange: PropTypes.func,
};

Datepicker.defaultProps = {
  locale: LOCALE.EN,
  calendar: CALENDARTYPE.GREGORIAN,
  type: TYPES.INPUT,
  mode: MODE.SINGLE,
  numberOfMonths: '1',
  otherPickers: OTHERPICKERS.DISABLE,
  zIndex: 100,
  scrollSensitive: true,
};

export { Datepicker };
