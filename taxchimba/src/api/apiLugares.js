import axios from 'axios';


export const getPlacesData = async (tipo,sw,ne) => {
    try {
        const {data: {data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${tipo}/list-in-boundary`, {
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
            },
            headers: {
              'X-RapidAPI-Key': '68dd00f317msh5ebca1e00bb1a9cp1cd535jsn2229e63b345e',
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
          });
        return data;
    } catch (error) {
        console.log(error)
    }
}