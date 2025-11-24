import React, { Component } from "react";
import PropTypes from "prop-types";

class UserStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "Fetching user status...",
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ status: "Active User" });
    }, 2000);
  }

  render() {
    const { userId } = this.props;

    return (
      <div style={styles.container}>
        <h2 style={styles.heading}>User Status</h2>

        <p style={styles.info}>
          User ID: <span style={styles.bold}>{userId}</span>
        </p>

        <p style={styles.status}>{this.state.status}</p>
      </div>
    );
  }
}

UserStatus.propTypes = {
  userId: PropTypes.number.isRequired,
};

const styles = {
  container: {
    margin: "40px auto",
    padding: "24px",
    width: "320px",
    borderRadius: "10px",
    border: "1px solid #ddd",
    fontFamily: "Arial",
  },
  heading: {
    marginBottom: "16px",
    textAlign: "center",
  },
  info: {
    marginBottom: "12px",
    fontSize: "15px",
  },
  bold: {
    fontWeight: "600",
  },
  status: {
    marginTop: "10px",
    fontSize: "16px",
    color: "#4F46E5",
    fontWeight: "bold",
  },
};

export default UserStatus;
