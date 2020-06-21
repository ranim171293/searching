import React from 'react';
// import {toJS} from 'immutable';
import { connect } from 'react-redux';
import SearchBar from '../../Components/SeachBar';
import { compose } from 'redux';
import {searchPeople, usersList} from '../../Redux/action';
// import reducer from '../../Redux/Reducer/index';
import LandingComponent from './style';

class Landing extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
    this.peopleDetails = [
      {name: "Dan",
      },
      {name: "John",
      },
      {name: "Ram",
      },
      {name: "Shayam",
      },
      {name: "Jimmy",
      }
    ]
  }

  componentDidMount() {
    this.props.dispatch(usersList())
  }

  searchItem = () => {
    console.log('kjhgf');
    this.props.dispatch(searchPeople(this.state.value))
  }
  onChangeFn = (event) => {
    this.setState({value: event.target.value});
  }

  render() {
    const { list } = this.props.Landing;
    console.log("list",list)
    return(
      <LandingComponent>
        <SearchBar value="" onChangeFn={(e) => this.onChangeFn(e)} handleSearch={() => this.searchItem()} />
        <div className="listWrapper">
        {list.map(ele => 
          <div key={ele.id} className="list">
            <div>{ele.login}</div>
          </div>)
        }
        </div>
      </LandingComponent>
    )
  }

}

function mapStateToProps(state) {
  console.log("state", state);
  const { main } = state
  console.log("main", main);
  return { Landing: main }
}

const mapDispatchToProps = function(dispatch) {
  return {
    dispatch,
  };
}


const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Landing);