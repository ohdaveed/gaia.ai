import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import mapStyles from './mapStyles';
import PropTypes from 'prop-types';
const AnyReactComponent = ({ text }) => <div>{text}</div>;



class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 41.8781,
      lng: -87.6298,
    },
    mapStyles,
    zoom: 14,
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
          }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={41.8781}
            lng={-87.6298}
            text="Plant"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
