import { AppDataSource } from '../database/data-source';

interface NearbyParams {
  lat: number;
  lng: number;
  radius: number;
}

export const findNearbyEstablishments = async ({ lat, lng, radius }: NearbyParams) => {

  const establishments = await AppDataSource.query(`
    SELECT 
      e.*,
      c."fantasyName" AS company_name,
      ROUND(
        ( 6371 * acos(
          cos(radians($1)) * cos(radians(e.latitude)) *
          cos(radians(e.longitude) - radians($2)) +
          sin(radians($1)) * sin(radians(e.latitude))
        ))::numeric, 2
      ) AS distance
    FROM establishments e
    LEFT JOIN companys c ON c.id = e."companyId"
    WHERE e.latitude IS NOT NULL
      AND e.longitude IS NOT NULL
      AND ( 6371 * acos(
        cos(radians($1)) * cos(radians(e.latitude)) *
        cos(radians(e.longitude) - radians($2)) +
        sin(radians($1)) * sin(radians(e.latitude))
      )) < $3
    ORDER BY distance ASC
  `, [lat, lng, radius]);

  return establishments;
};