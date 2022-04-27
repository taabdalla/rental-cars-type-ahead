import React from 'react';
import { render, screen} from '@testing-library/react';
import App from '../App';
jest.mock('../../header/Header', () => () => <div>Mock: Header component</div>);
jest.mock('../../content/Content', () => () => <div>Mock: Content component</div>);
jest.mock('../../footer/Footer', () => () => <div>Mock: Footer component</div>);
describe('<App/>', () => {
  it('should render page elements', () => {
    render(<App />);
    screen.getByText('Mock: Header component');
    screen.getByText('Mock: Content component');
    screen.getByText('Mock: Footer component');
  });
});
