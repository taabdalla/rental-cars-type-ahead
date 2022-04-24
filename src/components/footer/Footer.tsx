import React from 'react';
import './footer.scss';

export interface FooterLink {
    text: string;
    href: string;
}

export interface Props {
    footerLinks: FooterLink[];
}

const Footer: React.FC<Props> = ({ footerLinks }): JSX.Element => {
    return (
        <footer>
            <ul>
                {footerLinks.map((link, i) => (
                    <li key={i}><a href={link.href}>{link.text}</a></li>
                ))}
            </ul>
        </footer>
    );
}

export default Footer;
