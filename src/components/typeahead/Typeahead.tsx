import React, { useState } from "react";
import "./typeahead.scss";
import { getLocations, Location } from "../../api/locationsClient";
import SearchIcon from "../../icons/SearchIcon";

const Typeahead: React.FC = (): JSX.Element => {
  const [locations, setLocations] = useState<Location[]>([]);
  const [userInput, setUserInput] = useState<string>("");
  const [activeSuggestion, setActiveSuggestion] = useState<number>(0);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const NUMBER_OF_RESULTS_TO_SHOW = 6;

  const mapPlaceTypeToBandge = (placeType: string): string => {
    switch (placeType) {
      case "A":
        return "Airport";
      case "T":
        return "Station";
      case "C":
        return "City";
      case "D":
        return "District";
      case "P":
        return "Region";
      default:
        return "";
    }
  };
  
  /*
    Todo: debounce this functtion
  */
  const fetchLocations = async(searchTerm:string) =>{
    if (searchTerm.length > 1) {
      try{
        const fetchedLocations = await  getLocations(searchTerm)
        setLocations(fetchedLocations.slice(0, NUMBER_OF_RESULTS_TO_SHOW));
        setActiveSuggestion(0);
        setShowSuggestions(true);
      }catch(err){
        console.log(err);
      }
    }
    if (searchTerm.length === 0) {
      setLocations([]);
    }
  }
  
  const handleInputChange = async(searchTerm:string) => {
      setUserInput(searchTerm);  
      fetchLocations(searchTerm)
  }
 
  const handleInputFocus = () => {
    if (locations) {
      setShowSuggestions(true);
    }
  };


  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter') {
      const { name, iata, city, region, country } = locations[activeSuggestion];
      const displayName = `${name}${iata ? `, (${iata})` : ""}${city ? `, ${city}` : ""
      }${region ? `, ${region}` : ""}, ${country}`;
      setActiveSuggestion(0);
      setShowSuggestions(false);
      setUserInput(displayName)

    }
    else if (e.code === 'ArrowUp') {
      if (activeSuggestion === 0) {
        return;
      }
      setActiveSuggestion(activeSuggestion - 1)
    }
    else if (e.code === 'ArrowDown') {
      console.log(activeSuggestion)
      if (activeSuggestion - 1 === locations.length) {
        return;
      }
      setActiveSuggestion(activeSuggestion + 1)
    }
  };
  
  const handleLocationClick = (e:any) => {
    const innerText = e.currentTarget.innerText.split("\n\n");
    const displayName = innerText.splice(1,innerText.length).join(', ');
    setUserInput(displayName);
    //setLocations([]);
    setShowSuggestions(false);
    setActiveSuggestion(0)
  };

  
  return (
    <div className="search-bar-container">
      <SearchIcon className='search-icon'/>
      <label className="visually-hidden" htmlFor="typeAheadInputField">Pick-up Location</label>
      <input
        className="search-input"
        id="typeAheadInputField"
        name="inputField"
        type="text"
        value={userInput}
        placeholder="Pick-up Location"
        autoComplete="off"
        onChange={(e)=> handleInputChange(e?.target?.value)}
        onKeyDown={handleOnKeyDown}
        onFocus={handleInputFocus}
      />
      {showSuggestions && (
        <ul className="search-results" aria-label="suggestions">
          {locations.map((location: Location, i: number) => (
              <li key={i} className={i === activeSuggestion ? "active":""}>
                <button onClick={handleLocationClick}>
                  {location.placeType && (
                     <span
                     className={`badge ${mapPlaceTypeToBandge(
                       location.placeType
                     ).toLocaleLowerCase()}`}
                   >
                     {mapPlaceTypeToBandge(location.placeType)}
                   </span>
                  )}
                  <div>
                    <p>
                      {location.name}
                      {location.iata && <span>({location.iata})</span>}
                    </p>
                    <p>
                      {location.city && <span>{location.city}, </span>}
                      {location.region && <span>{location.region}, </span>}
                      {location.country}
                    </p>
                  </div>
                </button>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default Typeahead;
