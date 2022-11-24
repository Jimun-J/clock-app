import axios from 'axios';

const unsplashAPI = process.env.REACT_APP_CLIENT_KEY

export const getImage = async (query) => {
    let randomPage = toString(Math.floor((Math.random() * 10) + 1)); // page starts from 1
    let randomImage = Math.floor((Math.random() * 10)); // array starts from 0
    const url = `https://api.unsplash.com/search/photos?query=${query}&page=${randomPage}&client_id=${unsplashAPI}`;

    let res = await axios.get(url);
    console.log(res);
    return res.data.results[randomImage];
}

export const getQuote = async () => {
    const options = {
        method: 'POST',
        url: 'https://andruxnet-random-famous-quotes.p.rapidapi.com/',
        params: { cat: 'famous', count: '1' },
        headers: {
            'X-RapidAPI-Key': 'bec1046af8msh23401aeee262ecap18728bjsn6fc32e82396c',
            'X-RapidAPI-Host': 'andruxnet-random-famous-quotes.p.rapidapi.com'
        }
    };

    let res = await axios.request(options);
    return res.data[0];
}

export const getLocation = async () => {
    const options = {
        method: 'GET',
        url: 'https://ip-geo-location.p.rapidapi.com/ip/check',
        params: { format: 'json' },
        headers: {
            'X-RapidAPI-Key': 'bec1046af8msh23401aeee262ecap18728bjsn6fc32e82396c',
            'X-RapidAPI-Host': 'ip-geo-location.p.rapidapi.com'
        }
    };

    let res = await axios.request(options);
    return res.data;
}

export const getInfo = async (location, area) => {
    const options = {
        method: 'GET',
        url: 'https://world-time2.p.rapidapi.com/ip',
        headers: {
            'X-RapidAPI-Key': 'bec1046af8msh23401aeee262ecap18728bjsn6fc32e82396c',
            'X-RapidAPI-Host': 'world-time2.p.rapidapi.com'
        }
    };

    let res = await axios.request(options);
    return res.data;
}

