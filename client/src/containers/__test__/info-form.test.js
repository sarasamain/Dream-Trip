import React from 'react';
import InfoForm from './../info-form';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';

describe("Home page info form snapshot", () => {
  it('matches the snapshot', () => {
    const tree = renderer
    .create(
      <Router>
        <InfoForm />
      </Router>
    )
    .toJSON();
    expect(tree).toMatchSnapshot();
  });
})