import axios from 'axios';

interface GeoLocation {
  latitude: number;
  longitude: number;
}

export const geocodeAddress = async (
  address: string,
  number: string,
  district: string,
  city: string,
  state: string,
  cep: string
): Promise<GeoLocation | null> => {
  try {

    const queries = [
      `${address}, ${number}, ${city}, ${state}, Brasil`,
      `${address}, ${city}, ${state}, Brasil`,
      `${city}, ${state}, Brasil`,
    ];

    for (const query of queries) {
      console.log('Tentando:', query);

      const response = await axios.get('https://nominatim.openstreetmap.org/search', {
        params: {
          q: query,
          format: 'json',
          limit: 1,
        },
        headers: {
          'User-Agent': 'Servimap/1.0'
        }
      });

      if (response.data.length > 0) {
        const { lat, lon } = response.data[0];
        console.log('Encontrado:', lat, lon);
        return {
          latitude: parseFloat(lat),
          longitude: parseFloat(lon),
        };
      }
    }

    console.log('Endereço não encontrado');
    return null;

  } catch (error) {
    console.error('Erro ao geocodificar:', error);
    return null;
  }
};