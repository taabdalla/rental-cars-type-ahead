import React, { ReactElement } from 'react';
import  './searchIcon.scss';

interface IconProp {
    /**
     * Override or extend the styles applied to the component.
     */
    className?: string,
}

/**
 * SearchIcon component.
 *
 * @returns ReactElement
 */

const SearchIcon: React.FC<IconProp> = ({ className }): ReactElement => (
    <svg aria-hidden="true" className={`defaultStyles ${className}`} viewBox="0 0 24 24" width="1em" height="1em"><path d="M17.464 6.56a8.313 8.313 0 1 1-15.302 6.504A8.313 8.313 0 0 1 17.464 6.56zm1.38-.586C16.724.986 10.963-1.339 5.974.781.988 2.9-1.337 8.662.783 13.65c2.12 4.987 7.881 7.312 12.87 5.192 4.987-2.12 7.312-7.881 5.192-12.87zM15.691 16.75l7.029 7.03a.75.75 0 0 0 1.06-1.06l-7.029-7.03a.75.75 0 0 0-1.06 1.06z"></path></svg>
);

SearchIcon.defaultProps = {
    className: '',
};

export default SearchIcon;
