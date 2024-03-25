import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
    // 'X-BingApis-SDK': 'true',
    // 'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
    // 'X-RapidAPI-Key': 'dfc9be69famshcffc96f7a11c645p120071jsn2f374de849c2',
    'X-RapidAPI-Host': 'crypto-news34.p.rapidapi.com',
    'X-RapidAPI-Key': 'dfc9be69famshcffc96f7a11c645p120071jsn2f374de849c2'
}

// const baseUrl = 'https://bing-news-search1.p.rapidapi.com';
const baseUrl = 'https://crypto-news34.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: (count) => createRequest(`/news/cryptonews?limit=${count}`),
        })
    })
});

// Export generated hooks from the cryptoApi object, not createApi
export const {
    useGetCryptoNewsQuery,
} = cryptoNewsApi;
