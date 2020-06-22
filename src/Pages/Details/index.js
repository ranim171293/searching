import React from 'react';
import { connect } from "react-redux";
import { compose } from "redux";
import { InlineIcon } from '@iconify/react';
import gitBranch from '@iconify/icons-octicon/git-branch';
import starIcon from '@iconify/icons-octicon/star';

// import searchIcon from '@iconify/icons-octicon/search';

import DetailsComponent from './style'

class Details extends React.Component {

  inputColor = (lang) => {
    switch (lang) {
      case 'Ruby':
        return 'green';
      case 'JavaScript':
        return 'blue';
      default:
        break;
    }
  } 

  render() {
    const { details } = this.props.Details;
    console.log("details",details)
    return (
      <DetailsComponent>
        <div style={{width: '30%'}}>
        <img className="userImg" src={details[0] && details[0].owner && details[0].owner.avatar_url} alt=""></img>
        <div className="user">{details[0] && details[0].owner && details[0].owner.login}</div>
        </div>
        <div style={{width: '65%'}}>
        {details.map(ele => (
          <div className="repoDetail" key={ele.id}>
            <div className="name">{ele.name}</div>
            <div className="desc">{ele.description}</div>
            <div className="bottomDesc">
              {ele.language ? <div><span className="langColor" inputcolor={this.inputColor(ele.language)}></span><span className="branchCount">{ele.language}</span></div> : null}
              <div><InlineIcon icon={starIcon} /><span className="branchCount">{ele.forks_count}</span></div>
              <div><InlineIcon icon={gitBranch} /><span className="branchCount">{ele.stargazers_count}</span></div>
            </div>
          </div>))
        }
        </div>
      </DetailsComponent>
    )
  }
}

function mapStateToProps(state) {
  const { main } = state;
  return { Details: main };
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Details);