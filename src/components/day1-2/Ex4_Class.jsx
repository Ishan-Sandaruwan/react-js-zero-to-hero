// Exercise 4: Create a component that fetches data when it mounts and cleans up any ongoing requests when it unmounts.
import React, { Component } from "react";

class DataFetcher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      error: null,
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  componentWillUnmount() {
    // this.abortController.abort(); // Cancel any ongoing fetch requests
  }

  fetchData() {
    fetch("https://v2.jokeapi.dev/joke/Any?type=single")
      .then((response) => {
        // console.log("Fetch response:", response); // Add logging
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched data:", data); // Add logging
        this.setState({ data: data.joke, loading: false });
      })
      .catch((error) => {
        if (error.name !== "AbortError") {
          // Ignore abort errors
          console.error("Fetch error:", error); // Add logging
          this.setState({ error, loading: false });
        }
      });
  }

  render() {
    const { data, error, loading } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error.message}</div>;
    }

    return (
      <div>
        <h1>Data</h1>
        {data}
      </div>
    );
  }
}

export default DataFetcher;
