import React from "react";
// import {toJS} from 'immutable';
import { connect } from "react-redux";
import SearchBar from "../../Components/SeachBar";
import { compose } from "redux";
// import _ from 'lodash';
import { searchPeople, fetchUser, repoDetails } from "../../Redux/action";

import LandingComponent from "./style";

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  componentDidMount() {
    this.props.dispatch(fetchUser);
  }

  searchItem = () => {
    this.props.dispatch(searchPeople(this.state.value));
  };
  
  onChangeFn = (event) => {
    this.setState({ value: event.target.value });
  };

  userInfo = (url, username) => {
    this.props.dispatch(repoDetails(url))
    this.props.history.push(`/user/${username}`)
  }

  render() {
    const { list } = this.props.Landing;
    console.log("list", list);
    return (
      <LandingComponent>
        <SearchBar
          value=""
          onChangeFn={(e) => this.onChangeFn(e)}
          handleSearch={() => this.searchItem()}
        />
        <div className="listWrapper">
          {list.map((ele) => (
            <div key={ele.id} className="list" onClick={() => {this.userInfo(ele.repos_url, ele.login)}}>
              <img className="avatar" src={ele.avatar_url} alt="" ></img>
              <div>{ele.login}</div>
            </div>
          ))}
        </div>
      </LandingComponent>
    );
  }
}

function mapStateToProps(state) {
  const { main } = state;
  return { Landing: main };
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Landing);
