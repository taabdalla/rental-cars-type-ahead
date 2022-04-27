import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Typeahead from '../Typeahead';
import * as LocationsClient from '../../../api/locationsClient';
import { MOCK_API_LOCATIONS } from '../../../mocks/mockResponse';


const getLocationsMock = jest.spyOn(LocationsClient, 'getLocations');

describe('<Typeahead/>', () => {
    
    it('should render search input', () => {
        render(<Typeahead />);
        const seachInput = screen.getByPlaceholderText('Pick-up Location');
        expect(seachInput).toBeInTheDocument();
    });
    it('should not make an ajax call to api and render location suggestions results when < 2 characters are typed in the input', () => {
        render(<Typeahead />);
        const seachInput = screen.getByPlaceholderText('Pick-up Location');
        
        fireEvent.change(seachInput, { target: { value: 'l' } });
   
        expect(getLocationsMock).toBeCalledTimes(0);

    });
    it('should call api with the input value and render location suggetions results when more than 2 characters are typed in the input', async() => {
        getLocationsMock.mockResolvedValue(MOCK_API_LOCATIONS)
        render(<Typeahead />);
        
        const seachInput = screen.getByPlaceholderText('Pick-up Location');
        fireEvent.change(seachInput, { target: { value: 'lo' } });
        expect(getLocationsMock).toBeCalledTimes(1);
        expect(getLocationsMock).toBeCalledWith('lo');
        await waitFor(() => expect(screen.getAllByRole('list').length).toEqual(1));

    });
    it('should render max of 6 suggestions', async () => {
        getLocationsMock.mockResolvedValue(MOCK_API_LOCATIONS)
        render(<Typeahead />);
        
        const seachInput = screen.getByPlaceholderText('Pick-up Location');
       
            fireEvent.change(seachInput, { target: { value: 'lon' } });
       

        expect(getLocationsMock).toBeCalledTimes(1);
        expect(getLocationsMock).toBeCalledWith('lon');
        
        await waitFor(() => expect(screen.getAllByRole('listitem').length).toEqual(6));
        ;
    });
   


});
