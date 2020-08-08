import React from 'react';
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

// Component being tested
import SearchLocationInput from './../autocomplete-search'

describe.skip("autocomplete-search", () => {
  it("Should autosearch based on partial input", () => {
    render(<SearchLocationInput />)
    
  });
})