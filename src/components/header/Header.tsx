import React from 'react';
import './header.scss';
const Hero: React.FC = (): JSX.Element => {
    return (

        <header>
            <span className='flashDealBadge'>Flash Deal</span>
            <p className='callToAction'>5% off any rental in June, July or August.<span> Offer ends Monday!</span> <a href='http://https://www.rentalcars.com/'>More info</a></p>
        </header>


    );
}

export default Hero;
