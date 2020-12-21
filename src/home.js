import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import CovidHome from "./components/covid/CovidHome";

class Home extends Component {
  render() {
    return (
      <div
        style={{
          textAlign: "center",
          margin: "auto",
          width: 600,
          backgroundColor: "lightblue",
        }}
      >
        <h1>Helllo Home</h1>
        <Link
          to={{
            pathname: "/weather",
          }}
        >
          <button> Weather Report</button>
        </Link>
        {/* <ul>
          <li>
            <button onClick={() => this.props.history.push("/covid")}>
              Covid Data
            </button>
          </li>
          <li>
            <Link
              to={{
                pathname: "/weather",
              }}
            >
              <button> Weather Report</button>
            </Link>
          </li>
        </ul> */}
      </div>
    );
  }
}

export default withRouter(Home);
