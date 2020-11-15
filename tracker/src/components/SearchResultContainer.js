import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
import API from "../utils/API";
import "./SearchResultContainer.css";
import SortLink from "./sortLinks"

class SearchResultContainer extends Component {
  state = {
    search: "",
    results: []
  };

  // When this component mounts, search the  API or pictures of kittens
  componentDidMount() {
    this.searchPeople("A");
    ;
  }

  searchPeople = query => {
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
    this.searchPeople(this.state.search);
  };
  



  render() {
    return (
      <div>
        <h1 >Employee Directory</h1>
        <p>Search Employees or filter by category</p>
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        
        <SortLink/>
        
        <ResultList results={this.state.results} />
      </div>
    );
  }
}

export default SearchResultContainer;
