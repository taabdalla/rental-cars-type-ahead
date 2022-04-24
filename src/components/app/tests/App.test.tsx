import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

describe('<App/>', () => {
  it('should render', () => {
    const { getByText } = render(<App />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    getByText('Hello world');
  });
});
