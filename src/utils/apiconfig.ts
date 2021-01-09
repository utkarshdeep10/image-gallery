export const getImages = async (query: string) => {
    try {
        const url = `https://api.unsplash.com/search/photos?query=${query}&per_page=30`;
        const headers = {
            Authorization: `Client-ID ${process.env.REACT_APP_ACCESSKEY}`,
        };
        const response = await fetch(url, {
            method: "GET",
            headers: headers,
        });
        let data = await response.json();
        data = data.results.map((x: any) => ({
            src: x.urls.regular,
            thumbnail: x.urls.small,
            thumbnailWidth: 360,
            thumbnailHeight: 360,
        }));
        return data;
    } catch (e) {
        console.log(e);
    }
};
