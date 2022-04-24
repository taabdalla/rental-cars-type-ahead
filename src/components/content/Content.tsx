import React from 'react';
import './content.scss';
const Hero: React.FC = (): JSX.Element => {
  return (
      <div className='hero-container'>
        <div className='hero-container-gradient'>
          <div className='container'>
            <h1>Car Hire – Search, Compare & Save</h1>

            <div className="search-bar-container">
      <input className='search-input'
        name="typeAheadInputField"
        type="text"
        placeholder='Pick-up Location'
        autoComplete="off"
      // onKeyDown={keyboardEventHandler}
      // onBlur={onInputBlurHandler}
      // onChange={onInputChangeHandler}
      // onFocus={onInputFocusHandler}
      />
      </div>
          </div>
        </div>
      </div>
  );
}

export default Hero;
