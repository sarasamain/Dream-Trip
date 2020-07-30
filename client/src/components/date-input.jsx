import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';

export default function DateInput({ dateValue, handleDateChange, label }) {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        label={label}
        clearable
        value={dateValue}
        placeholder="10/10/2018"
        onChange={(date) => handleDateChange(date)}
        format="MM/dd/yyyy"
        InputLabelProps={{
          shrink: true,
        }}
      />
    </MuiPickersUtilsProvider>
  );
}
