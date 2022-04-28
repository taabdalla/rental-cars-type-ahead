import nock from 'nock';
import { getLocations } from '../locationsClient';
import { MOCK_API_RESPONSE } from '../../mocks/mockResponse';

describe('getLocations', () => {
    const APA_URL = 'https://www.rentalcars.com/';

    it('should return 200 correctly', async () => {
        nock(APA_URL)
            .get('/FTSAutocomplete.do')
            .query({ solrIndex:'fts_en',solrRows:6,solrTerm:'london'})
            .reply(200, MOCK_API_RESPONSE);

        const res = await getLocations('london');
        expect(res).toEqual(MOCK_API_RESPONSE.results.docs);
    });
    it('should handle error', async () => {
        const MOCK_ERROR={
            status:400,
            message:'Error has occured'
        }
        nock(APA_URL)
        .get('/LocationAutocomplete.do')
        .query({ domain:'rc.com',cor:'gb',preflang:'en',term:'london'})
        .reply(400, MOCK_ERROR);

        const res = await getLocations('ljdsds sdsljdsljds');
        expect(res).toEqual(null);
    });
});