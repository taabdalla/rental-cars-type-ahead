import superagent, { Response } from 'superagent';

export interface Location {
    //placeType maybe enum
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

export const getLocations = (searchTerm: string): Promise< Location[] | [] > => {
    const uri = `https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en&solrRows=6&solrTerm=${searchTerm}`;
    return superagent
        .get(uri)
        .then((res: Response) => res.body.results.docs)
        .catch(() => null)
}