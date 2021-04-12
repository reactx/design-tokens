import React, { useEffect, useState } from 'react';
import { InferProps } from 'prop-types';
import { cleanProps, generateClass } from '../../utils';
import DatePicker, { Calendar, DateObject } from "react-multi-date-picker"
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

export interface IDatepickerComp {
  id?: string,
  className?: string,
  calendar?: 'gregorian' |
  'persian' |
  'arabic' |
  'indian',
  locale?: 'fa' |
  'en' |
  'ar' |
  'hi',
  type?: 'input' |
  'input-icon' |
  'button' |
  'icon' |
  'calendar',
  mode?: 'single' |
  'multiple' |
  'range',
  numberOfMonths?: 1 | 2 | 3,
  otherPickers?: 'disable' |
  'timePicker' |
  'onlyTimePicker' |
  'onlyMonthPicker' |
  'onlyYearPicker',
  name?: string,
  title?: string,
  placeholder?: string,
  weekDays?: string[],
  months?: string[],
  format?: string,
  minDate?: string,
  maxDate?: string,
  children?: Array<React.ReactNode>,
  disabled?: boolean,
  editable?: boolean,
  datePanel?: boolean,
  sort?: boolean,
  showOtherDays?: boolean,
  disableMonthPicker?: boolean,
  disableYearPicker?: boolean,
  layout?: 'default' |
  'rmdp-prime' |
  'rmdp-mobile',
  color?: 'green' |
  'red' |
  'yellow' |
  'purple' |
  'teal',
  background?: 'bg-dark' |
  'bg-gray' |
  'bg-brown',
  calendarPosition?: 'bottom-left' |
  'bottom-center' |
  'bottom-right' |
  'top-left' |
  'top-center' |
  'right-top' |
  'right-center' |
  'right-bottom' |
  'left-top' |
  'left-center' |
  'left-bottom',
  animation?: boolean,
  arrow?: boolean,
  scrollSensitive?: boolean,
  hideOnScroll?: boolean,
  fixMainPosition?: boolean,
  fixRelativePosition?: boolean,
  offsetX?: number,
  offsetY?: number,
  zIndex?: number,
  onChange?: (data: object) => void,
  onOpen?: () => void,
  onClose?: () => void,
  mapDays?: (data: any) => any,
  onPositionChange?: (data: object) => void,
};

const CalendarComponent = (props: InferProps<IDatepickerComp> ) => {
  const [value, setValue] = useState<Date | DateObject | DateObject[]>(new Date());
  const [picker, setPicker] = useState<Object>({});
  const [mode, setMode] = useState<Object>({});
  const [numberOfMonths, setNumberOfMonths] = useState<number>(1);
  const [dayName, setDayName] = useState<string[]>([]);
  const [monthName, setMonthName] = useState<string[]>([]);
  const parentProps = { ...props };
  cleanProps(parentProps);

  useEffect(() => {
    if (props.numberOfMonths) setNumberOfMonths(parseInt(props.numberOfMonths));
    if (props.weekDays) setDayName(JSON.parse(props.weekDays));
    if (props.months) setMonthName(JSON.parse(props.months));
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
  ]);

  return (
    <>
      {props.type !== 'calendar' ? (
        <DatePicker
          className={
            generateClass(props, 'datepicker') +
            ' ' +
            (props.color ? props.color : '') +
            ' ' +
            (props.background ? props.background : '') +
            ' ' +
            (props.layout ? props.layout : '')
          }
          {...parentProps}
          {...picker}
          {...mode}
          numberOfMonths={numberOfMonths}
          plugins={props.datePanel ? [<DatePanel />] : []}
          animation={props.animation}
          weekDays={dayName}
          months={monthName}
          value={value}
          onChange={(e) => setValue(e)}
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
        >
          {props.children}
        </Calendar>
      )}
    </>
  );
};

const Datepicker = React.forwardRef((props: IDatepickerComp) => (
  <CalendarComponent {...props} />
));

Datepicker.defaultProps = {
  locale: 'en',
  calendar: 'gregorian',
  type: 'input',
  mode: 'single',
  numberOfMonths: 1,
  layout: 'default',
  otherPickers: 'disable',
  zIndex: 100,
  scrollSensitive: true,
};

export { Datepicker };
