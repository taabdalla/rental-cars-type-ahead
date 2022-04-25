import React, { useState, ChangeEvent, useEffect } from "react";
import "./typeahead.scss";
import { getLocations, Location } from "../../api/locationsClient";

const Typeahead: React.FC = (): JSX.Element => {
  const [locations, setLocations] = useState<Location[] | null>(null);
  const [inputVal, setInputVal] = useState<string>("");
  const [showSuggestions, setShowSuggestions] = useState<boolean>(Boolean);
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
      default:
        return "";
    }
  };

  const handleInputChange = async (e: ChangeEvent) => {
    const target = (e as ChangeEvent<HTMLInputElement>).target;
    const { value } = target;
    setInputVal(value);
    if (value.length > 1) {
      getLocations(value).then((locations: Location[]) => {
        setLocations(locations.slice(0, NUMBER_OF_RESULTS_TO_SHOW));
        setShowSuggestions(true);
      });
    } else {
      setLocations(null);
    }
  };

  const handleInputFocus = () => {
    if (locations) {
      setShowSuggestions(true);
    }
  };

  const handleLocationClick = (location: Location) => {
    const { name, iata, city, region } = location;

    const displayName = `${name}${iata ? `, (${iata})` : ""}${
      city ? `, ${city}` : ""
    }${region ? `, ${region}` : ""}`;

    setInputVal(displayName);
    setShowSuggestions(false);
  };

  return (
    <div className="search-bar-container">
      <input
        className="search-input"
        name="typeAheadInputField"
        type="text"
        placeholder="Pick-up Location"
        autoComplete="off"
        value={inputVal}
        onChange={(e) => handleInputChange(e)}
        onFocus={handleInputFocus}
      />
      {showSuggestions && (
        <ul className="search-results">
          {locations &&
            locations.map((location: Location, i: any) => (
              <li key={i}>
                <button onClick={() => handleLocationClick(location)}>
                  <span
                    className={`badge ${mapPlaceTypeToBandge(
                      location.placeType
                    ).toLocaleLowerCase()}`}
                  >
                    {mapPlaceTypeToBandge(location.placeType)}
                  </span>
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
