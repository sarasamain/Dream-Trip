import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import Categories from "../Categories.jsx";
import renderer from 'react-test-renderer';

describe("Categories", () => {

  it('renders correctly', () => {
    const tree = renderer
      .create(<Router>
        <Categories/>
      </Router>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
