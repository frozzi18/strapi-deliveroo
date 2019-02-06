// THis will load each time URL is at the root

/* pages/index.js */

/*

&nbsp => spacing
app.js load automatically before index.js, maybe 
because next.js?

// 

*/
import RestaurantList from "../components/RestaurantList";
import React from "react";

import {
  Alert,
  Button,
  Col,
  Input,
  InputGroup,
  InputGroupAddon,
  Row
} from "reactstrap";

class Index extends React.Component {
  constructor(props) { //what is it for?
    super(props);
    //query state will be passed to RestaurantList for the filter query
    this.state = {
      query: ""
    };
  }
  onChange(e) {
    //set the state = to the input typed in the search Input Component
    //this.state.query gets passed into RestaurantList to filter the results
    this.setState({ query: e.target.value.toLowerCase() });
  }
  render() {
    return (
      <div className="container-fluid"> {/* A JSX comment */}
        <Row>
          <Col>
            <div className="search">
              <InputGroup>
                <InputGroupAddon addonType="append"> Search </InputGroupAddon> {/* what is it for? */}
                <Input onChange={this.onChange.bind(this)} />
              </InputGroup>
            </div>
            <RestaurantList search={this.state.query} />
          </Col>
        </Row>
        <style jsx>
          {`
            .search {
              margin: 20px;
              width: 500px;
            }
          `}
        </style>
      </div>
    );
  }
}

export default Index;
