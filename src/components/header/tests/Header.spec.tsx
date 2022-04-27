import React from 'react';
import { render, screen} from '@testing-library/react';
import Header from '../Header';

describe('<Header/>', () => {
  it('should render header elements', () => {
    render(<Header />);
    screen.getByText('Flash Deal');
    screen.getByText('5% off any rental in June, July or August.');
    screen.getByText('Offer ends Monday!');
  });
});
