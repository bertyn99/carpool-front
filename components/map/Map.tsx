import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const Map = () => {
    const position = [51.505, -0.09]

    return (
        <MapContainer
            center={position}
            zoom={12}
            className=" mb-10"
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </MapContainer>

    )
}

export default Map