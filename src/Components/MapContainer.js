import React, { useEffect, useRef } from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

function MyMapComponent({ apiKey }) {
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) {
      new window.google.maps.Map(mapRef.current, {
        center: { lat: 0, lng: 0 }, // Cambia esto con tu centro y zoom deseados
        zoom: 8, // Cambia esto con el nivel de zoom deseado
      });
    }
  }, []);

  const renderMap = (status) => {
    switch (status) {
      case Status.LOADING:
        return <div>Loading...</div>; // Puedes personalizar el mensaje de carga
      case Status.FAILURE:
        return <div>Error loading map</div>; // Puedes personalizar el mensaje de error
      case Status.SUCCESS:
        return <div ref={mapRef} style={{ width: "100%", height: "400px" }} />;
      default:
        return null;
    }
  };

  return (
    <Wrapper apiKey={apiKey} render={renderMap}>
      {/* Aquí puedes agregar otros componentes o contenido si es necesario */}
    </Wrapper>
  );
}

export default MyMapComponent;
