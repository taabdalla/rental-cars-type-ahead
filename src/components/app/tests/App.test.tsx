import React from 'react';
import { render, screen} from '@testing-library/react';
import App from '../App';

describe('<App/>', () => {
  it('should render page elements', () => {
    render(<App />);
    screen.getByText('Flash Deal');
    screen.getByText('5% off any rental in June, July or August.');
    screen.getByText('Offer ends Monday!');
    screen.getByText('Car Hire – Search, Compare & Save');
    screen.getByPlaceholderText("Pick-up Location");
  });
});
