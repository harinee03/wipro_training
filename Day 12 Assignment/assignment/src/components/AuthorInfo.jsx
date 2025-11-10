import React, { Component } from "react";
import "./BookList.css";

class AuthorInfo extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true, authorData: null };
  }

  componentDidMount() {
    console.log(`AuthorInfo: Loading details for ${this.props.author}...`);
    setTimeout(() => {
      const authorDetails = {
        "Paulo Coelho": {
          bio: "Paulo Coelho is a Brazilian novelist known for The Alchemist and inspiring philosophical works.",
          topBooks: ["The Alchemist", "Brida", "Veronika Decides to Die"],
        },
        "James Clear": {
          bio: "James Clear writes about building habits and achieving long-term growth.",
          topBooks: [
            "Atomic Habits",
            "Transform Your Habits",
            "The Clear Habit Journal",
          ],
        },
        "Robert Kiyosaki": {
          bio: "Robert Kiyosaki is a financial educator who advocates for financial independence.",
          topBooks: [
            "Rich Dad Poor Dad",
            "Cashflow Quadrant",
            "Rich Dad’s Guide to Investing",
          ],
        },
        "Franz Kafka": {
          bio: "Franz Kafka is known for his existential and surreal writing.",
          topBooks: ["The Metamorphosis", "The Trial", "The Castle"],
        },
      };

      this.setState({
        loading: false,
        authorData: authorDetails[this.props.author],
      });
    }, 1000);
  }

  render() {
    const { author } = this.props;
    const { loading, authorData } = this.state;

    if (loading) return <p>Loading details for {author}...</p>;

    return (
      <div className="author-info">
        <h4>About {author}</h4>
        <p>{authorData.bio}</p>
        <h5>Top 3 Books:</h5>
        <ul>
          {authorData.topBooks.map((book, i) => (
            <li key={i}>{book}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default AuthorInfo;
