import styled from 'styled-components';

const SearchBarComponent = styled.div`
  .searchBox{
    width: 80%;
    background: #ececec;
    padding: 10px 25px 10px 30px;
    border: 1px solid #e4e4e4;
    position: relative;
  }
  .searchIcon {
    position: absolute;
    z-index: 1;
    top: 10px;
    margin-left: 5px;
  }

`;

export default SearchBarComponent;