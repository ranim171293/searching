import styled from 'styled-components';

const LandingComponent = styled.div`
  width: 70%;
  .listWrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 30px;
  }
  .list {
    display: flex;
    padding: 20px;
    border-bottom: 1px solid #dedede;
    width: 100%;
    cursor:pointer;
  }
  .avatar {
    width: 70px;
    margin-right: 30px;
  }
`;

export default LandingComponent;