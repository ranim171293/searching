import React from 'react';
import { Icon } from '@iconify/react';
import searchIcon from '@iconify/icons-octicon/search';
import SearchBarComponent from './style'

class SearchBar extends React.PureComponent {
  
  render() {
    const {handleSearch, onChangeFn} = this.props;
    return (
      <SearchBarComponent>
        <Icon className="searchIcon" color="#737373" icon={searchIcon} />
        <input className="searchBox" type="text" onChange={onChangeFn} onKeyUp={handleSearch} placeholder="Find a Member"></input>
      </SearchBarComponent>
    )
  }
}

export default SearchBar;