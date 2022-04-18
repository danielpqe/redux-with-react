import React, { Component } from "react";
// import axios from "axios";
import { connect } from "react-redux";

import * as usersActions from "../../actions/usersActions";

class Users extends Component {
  // constructor(props) {
  //   super();
  //   this.state = {
  //     usuarios: [],
  //   };
  // }

  componentDidMount() {
    //this.props.getAll();
  }

  ponerFilas = () =>
    this.props.users.map((user) => (
      <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.website}</td>
      </tr>
    ));

  render() {
    console.log(this.props);
    return (
      <div>
        <table className="tabla">
          <thead>
            <tr key="">
              <th>Name</th>
              <th>Email</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>{this.ponerFilas()}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (reducers) => {
  return reducers.usersReducer;
};

export default connect(mapStateToProps, { usersActions })(Users);
