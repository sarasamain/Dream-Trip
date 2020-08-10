import React from 'react';
import renderer from 'react-test-renderer'
import InfoForm from './../info-form'
import { BrowserRouter as Router } from 'react-router-dom';

it('should render the snapshot correctly', () => {
  const tree = renderer
  .create(
    <Router>
      <InfoForm />
    </Router>
  )
  .toJSON();

  expect(tree).toMatchSnapshot();
})