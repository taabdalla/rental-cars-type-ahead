import React from 'react';
import { render, screen} from '@testing-library/react';
import Footer, {FooterLink} from '../Footer';

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
      text: 'Supply Partner Enquiry and Marketplace',
      href: 'https://www.rentalcars.com/',
    },
  ]
describe('<Footer/>', () => {
  it('should render Footer links', () => {
    render(<Footer footerLinks={footerItems}/>);
    const linksList = screen.getAllByRole('listitem');
    expect(linksList.length).toEqual(footerItems.length);
    expect(linksList[0]).toHaveTextContent(footerItems[0].text);
    expect(linksList[2]).toHaveTextContent(footerItems[2].text);
    expect(linksList[3]).toHaveTextContent(footerItems[3].text);
    expect(linksList[4]).toHaveTextContent(footerItems[4].text);
    expect(linksList[5]).toHaveTextContent(footerItems[5].text);
    expect(linksList[6]).toHaveTextContent(footerItems[6].text);
  });
});
