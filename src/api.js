import axios from "axios";

const searchImages = async (term) => {
    const res = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID 0t9trLEGsNJj9N2Uvf_ySlbM0NC-BmmgWa1ILQIjEsM',
        },
        params: {
            query: term,
        }
    });
    return res.data.results;
};

export default searchImages;