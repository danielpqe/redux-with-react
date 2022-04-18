import React, { Component } from "react";
import axios from "axios";

class Users extends Component {
  constructor(props) {
    super();
    this.state = {
      usuarios: [],
    };
  }

  async componentDidMount() {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    this.setState({
      usuarios: data,
    });
  }
  ponerFilas = () =>
    this.state.usuarios.map((user) => (
      <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.website}</td>
      </tr>
    ));

  render() {
    return (
      <div className="margen">
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

export default Users;
