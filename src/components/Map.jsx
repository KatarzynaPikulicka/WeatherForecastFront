import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export function Map({ coords, setCoords }) {
  return (
    <MapContainer
      center={coords}
      zoom={13}
      scrollWheelZoom={true}
      className="map"
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        position={coords}
        draggable
        eventHandlers={{
          dragend: (e) => {
            setCoords(e.target.getLatLng());
          },
        }}
      >
        <Popup>
          Przeciągnij pinezkę, aby zmienić lokalizację prognozy pogody
        </Popup>
      </Marker>
    </MapContainer>
  );
}
