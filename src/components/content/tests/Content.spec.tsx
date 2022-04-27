import React from 'react';
import { render, screen} from '@testing-library/react';
import Content from '../Content';
jest.mock('../../typeahead/Typeahead', () => () => <div>Mock: TypeAhead component</div>);
describe('<Content/>', () => {
  it('should render page heading', () => {
    render(<Content />);
    screen.getByText('Car Hire – Search, Compare & Save');
    screen.getByText('Mock: TypeAhead component');
  });
});
