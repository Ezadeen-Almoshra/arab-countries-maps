import { useState, useEffect } from "react";

export const useGeoData = (country) => {
  const [geoData, setGeoData] = useState([]);

  useEffect(() => {
    const fetchGeoData = async () => {
      try {
        const dataPromises = country?.map((country) =>
          fetch(country.path).then((response) => {
            if (!response.ok) {
              throw new Error(
                `Network response was not ok for ${country.path}`
              );
            }
            return response.json().then((data) => ({
              data,
              color: country.color,
            }));
          })
        );

        const data = await Promise.all(dataPromises);
        setGeoData(data);
      } catch (error) {
        console.error("Error fetching geo data:", error);
      }
    };

    fetchGeoData();
  }, [country]);

  return geoData;
};
