import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
import API from "../utils/API";

class SearchResultContainer extends Component {
  state = {
    search: "",
    results: []
  };

  // When this component mounts, search the Giphy API for pictures of kittens
  componentDidMount() {
    this.searchGiphy("kittens");
  }

  searchGiphy = query => {
    API.search(query)
      .then(res => this.setState({ results: res.data.results }))
      .catch(err => console.log(err));
  };
handleInputChange = event => {
  this.setState({ search: event.target.value})
};
 

  // When the form is submitted, search the Giphy API for `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchGiphy(this.state.search);
  };



  render() {
    return (
      <div>
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        {console.log(this.state.results)}
        <ResultList results={this.state.results} />
      </div>
    );
  }
}

export default SearchResultContainer;
