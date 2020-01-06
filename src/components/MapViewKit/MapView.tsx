import React, { useState } from "react";
import theme from "../Theme";
import { Grommet, Box, Text } from "grommet";
import ReactMapGL from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { config } from '../../config';

const MapView: React.FC = () => {
  const [viewport, setViewport] = useState({
    width: 400,
    height: 400,
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8
  });
  return (
    <Grommet theme={theme}>
      <Box height="180px">
        <Text>MapView</Text>
        <ReactMapGL {...viewport} mapboxApiAccessToken={config.MAPBOX_TOKEN}  onViewportChange={setViewport} />
      </Box>
    </Grommet>
  );
};

export default MapView;
