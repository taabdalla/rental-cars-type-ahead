import React, { useState, ChangeEvent } from 'react';
import './typeahead.scss';
import { getLocations, Location } from '../../api/locationsClient';

const Typeahead: React.FC = (): JSX.Element => {
  const [locations, setLocations] = useState<Location[] | null>(null);
  const NUMBER_OF_RESULTS_TO_SHOW = 6;
  
  const mapPlaceTypeToBandge = (placeType: string): string => {
    switch (placeType) {
      case 'A':
        return 'Airport';
      case 'T':
        return 'Station';
      case 'C':
        return 'City';
      case 'D':
        return 'District';
      default:
        return '';
    }
  }
 
  const handleInputChange = async (e: ChangeEvent) => {
    const target = (e as ChangeEvent<HTMLInputElement>).target;
    const { value } = target;
    if (value.length > 1) {
      getLocations(value).then((locations: Location[]) => {
        setLocations(locations.slice(0, NUMBER_OF_RESULTS_TO_SHOW))
      })
    }else{
      setLocations(null)
    }
};
  return (
    <div className="search-bar-container">
      <input className='search-input'
        name="typeAheadInputField"
        type="text"
        placeholder='Pick-up Location'
        autoComplete="off"
        onChange={(e)=>handleInputChange(e)}
      />
      {locations &&(
        <ul className='search-results'>
        {locations.map((location: Location, i: any) => (
          <li key={i}>
            <span className={`badge ${mapPlaceTypeToBandge(location.placeType).toLocaleLowerCase()}`}>{mapPlaceTypeToBandge(location.placeType)}</span>
            <div className='location'>
              <p>{location.name} {location.iata && (<span>({location.iata})</span>)}</p>
              <p>{location.city && (<span>{location.city},</span>)} {location.region && (<span>{location.region},</span>)} {location.country}</p>
            </div>
          </li>
        ))
        }
      </ul>
      )}
       
    </div>
  );
}

export default Typeahead;
