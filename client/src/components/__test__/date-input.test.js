import React from 'react';
import DateInput from './../date-input';
import {
  act,
  render,
  wait,
  fireEvent,
  screen
} from "@testing-library/react";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import { ExpansionPanelActions } from '@material-ui/core';

const date = "2017-10-10";

describe.skip("date-input", () => {
  it("Should display the date chosen", () => {
    render(<DateInput dateValue={date} handleDateChange={()=>{}} label="this is a label" />)
    expect(screen.getByDisplayValue(date)).toBeInTheDocument();
  });
})