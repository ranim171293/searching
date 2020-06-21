import React from 'react';
import SearchBarComponent from './style'

class SearchBar extends React.PureComponent {
  
  render() {
    const {handleSearch, onChangeFn} = this.props;
    return (
      <SearchBarComponent>
        <input className="searchBox" type="text" onChange={onChangeFn} onKeyUp={handleSearch} placeholder="Find a Member"></input>
      </SearchBarComponent>
    )
  }
}

export default SearchBar;