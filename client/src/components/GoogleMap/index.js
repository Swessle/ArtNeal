import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

const mapStyles = {
  width: "100%",
	height: "50vh",
	alignSelf: "center"
};

export class MapContainer extends Component {
	render() {
		return (
			<Map
				className="googleMap"
				google={this.props.google}
				zoom={14}
				style={mapStyles}
				initialCenter={{
					lat: 32.7204681,
					lng: -117.1425551
				}}
			>
				<Marker
					title={"Neal's Art Gallery"}
					name={"Art Gallery"}
					position={{ lat: 32.7204681, lng: -117.1425551 }}
				/>
			</Map>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: process.env.GOOGLE_ID
})(MapContainer);
