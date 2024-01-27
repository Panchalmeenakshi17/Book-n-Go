import React, { useContext, useState, useEffect } from "react";
import {
  DirectionsRenderer,
  GoogleMap,
  MarkerF,
  OverlayView,
  OverlayViewF,
  useJsApiLoader
} from "@react-google-maps/api";
import { SourceContext } from "../context/SourceContext";
import { DestinationContext } from "../context/DestinationContext";

const GoogleMapSection = () => {

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "YOUR_API_KEY"
  })

  const containerStyle = {
    width: "100%",
    height: window.innerWidth * 0.45,
  };

  const { source, setSource } = useContext(SourceContext);
  const { destination, setDestination } = useContext(DestinationContext);

  const [center, setCenter] = useState({
    lat: -3.745,
    lng: -38.523,
  });

  const [map, setMap] = React.useState(null);
  const [directionRoutePoints, setDirectionRoutePoints] = useState([]);

  useEffect(() => {
    if (source?.length != [] && map) {
      map.panTo({
        lat: source.lat,
        lng: source.lng,
      });
      setCenter({
        lat: source.lat,
        lng: source.lng,
      });
    }

    if (source.length != [] && destination.length != []) {
      directionRoute();
    }
  }, [source]);

  useEffect(() => {
    if (destination?.length != [] && map) {
      setCenter({
        lat: destination.lat,
        lng: destination.lng,
      });
    }

    if (source.length != [] && destination.length != []) {
      directionRoute();
    }
  }, [destination]);

  const directionRoute = () => {
    const DirectionsService = new window.google.maps.DirectionsService();

    DirectionsService.route(
      {
        origin: { lat: source.lat, lng: source.lng },
        destination: { lat: destination.lat, lng: destination.lng },
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        setDirectionRoutePoints(result);
        if (status === window.google.maps.DirectionsStatus.OK) {
          console.log(result.routes);
          setDirectionRoutePoints(result);
        } else {
          console.log("Error");
        }
      }
    );
  };

  const onLoad = React.useCallback(
    function callback(map) {
      setMap(map);

      const bounds = new window.google.maps.LatLngBounds();

      if (source.length !== 0) {
        bounds.extend(new window.google.maps.LatLng(source.lat, source.lng));
      }

      if (destination.length !== 0) {
        bounds.extend(
          new window.google.maps.LatLng(destination.lat, destination.lng)
        );
      }

      if (source.length !== 0 || destination.length !== 0) {
        map.fitBounds(bounds);
        setCenter({
          lat: bounds.getCenter().lat(),
          lng: bounds.getCenter().lng(),
        });
      }
    },
    [source, destination]
  );

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {source.length !== 0 ? (
          <MarkerF
            position={{ lat: source.lat, lng: source.lng }}
            icon={{
              url: "/images/source.png",
              scaledSize: { width: 20, height: 20 },
            }}
          >
            <OverlayViewF
              position={{ lat: source.lat, lng: source.lng }}
              mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
            >
              <div className="p-2 bg-white font-bold inline-block">
                <p className="text-black text-[18px]">{source.label}</p>
              </div>
            </OverlayViewF>
          </MarkerF>
        ) : null}

        {destination.length !== 0 ? (
          <MarkerF
            position={{ lat: destination.lat, lng: destination.lng }}
            icon={{
              url: "/images/destination.png",
              scaledSize: { width: 20, height: 20 },
            }}
          >
            <OverlayViewF
              position={{ lat: destination.lat, lng: destination.lng }}
              mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
            >
              <div className="p-2 bg-white font-bold inline-block">
                <p className="text-black text-[18px]">{destination.label}</p>
              </div>
            </OverlayViewF>
          </MarkerF>
        ) : null}

        <DirectionsRenderer
          directions={directionRoutePoints}
          options={{
            polylineOptions: {
              strokeColor: "#000",
              strokeWeight: 5,
            },
            suppressMarkers: true,
          }}
        />
      </GoogleMap>
    </>
  ) : <></>;
};

export default GoogleMapSection;