import React from 'react';
import Typeahead from '../typeahead/Typeahead';
import './content.scss';
const Hero: React.FC = (): JSX.Element => {
  return (
      <div className='hero-container'>
        <div className='hero-container-gradient'>
          <div className='container'>
            <h1>Car Hire – Search, Compare & Save</h1>

            <Typeahead/>
          </div>
        </div>
      </div>
  );
}

export default Hero;
