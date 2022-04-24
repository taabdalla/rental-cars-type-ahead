import React from 'react';
import './app.scss';
import Header  from '../header/Header';
import Content  from '../content/Content'
import Footer, { FooterLink } from '../footer/Footer';

const footerItems: FooterLink[] = [
  {
    text: 'Privacy Notice',
    href: 'https://www.rentalcars.com/',
  },
  {
    text: 'Cookies',
    href: 'https://www.rentalcars.com/',
  },
  {
    text: 'Terms & conditions',
    href: 'https://www.rentalcars.com/',
  },
  {
    text: 'Help',
    href: 'https://www.rentalcars.com/Help.do',
  },
  {
    text: 'Modern Slavery Statement',
    href: 'https://www.rentalcars.com/',
  },
  {
    text: 'How we work',
    href: 'https://www.rentalcars.com/PrivacyPolicy.do',
  },
  {
    text: 'How we work',
    href: 'https://www.rentalcars.com/PrivacyPolicy.do',
  },
]
const App: React.FC = (): JSX.Element => {
  return (
    <div className="app-container">
      <Header />
      <Content />
      <Footer footerLinks={footerItems} />
    </div>
  );
}

export default App;
