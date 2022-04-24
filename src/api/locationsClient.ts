import superagent, { Response, ResponseError } from 'superagent';

export interface Location {
    placeType: string;
    placeKey: string;
    locationId: string;
    name: string;
    iata?: string;
    city?: string
    region: string;
    country: string;
    countryIso: string,
    ufi: number,
    bookingId: string,
    lat: number,
    lng: number,
    alternative: string[],
    searchType: string,
    lang: string,
    index: number,
    isPopular: boolean
}

export const getLocations = (searchTerm: string): Promise< Location[] | []> => {
    const uri = `https://www.rentalcars.com/LocationAutocomplete.do?domain=rc.com&cor=gb&preflang=en&term=${searchTerm}`;
    return superagent
        .get(uri)
        .then((res: Response) => res.body.results.docs)
        .catch((err: ResponseError) => console.log(err))
}