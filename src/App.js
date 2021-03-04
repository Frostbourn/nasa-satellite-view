import React from "react";
import styled from "styled-components";

import SearchBox from "./components/SearchBox/SearchBox.js";
import Map from "./components/Map/Map.js";
import Photo from "./components/Photo/Photo.js";
import { Grid, Card, CardContent } from "@material-ui/core";

import "./styles.css";
import "leaflet/dist/leaflet.css";

const MainContainer = styled.section`
  padding: 8vw 3vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

class App extends React.Component {
  state = {
    query: {},
    lat: "",
    lng: "",
    zoom: 1
  };

  handleChange = async (query) => {
    this.setState({
      query: query,
      lat: query ? query.center[1] : "",
      lng: query ? query.center[0] : "",
      zoom: query ? 10 : 1
    });
  };

  render() {
    const { lat } = this.state;
    return (
      <MainContainer>
        <Grid container justify="center">
          <Grid item xs={10} md={8}>
            <Card className="app__content">
              <CardContent>
                <SearchBox state={this.handleChange} />
                <Map className="content__map" props={this.state} />
                {lat ? <Photo props={this.state} /> : ""}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </MainContainer>
    );
  }
}
export default App;
