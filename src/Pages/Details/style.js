import styled from 'styled-components';

const DetailsComponent = styled.div`
  display: flex;
  width: 100%;
  .repoDetail {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    border-bottom: 1px solid #dedede;
    padding: 20px 0px;
  }
  .name {
    font-size: 20px;
    font-weight: 700;
    padding-bottom: 10px;
    color: #0366d6;
  }
  .desc {
    font-size: 14px;
    padding-bottom: 15px;
  }
  .bottomDesc {
    display: grid;
    grid-template-columns: 150px 150px 150px;
    text-align: start;
    font-size: 12px;
    color: #737373;
  }
  .user {
    font-weight: 500;
    font-size: 18px;
    padding-top: 15px;
    width: 200px;
    margin: auto;
    text-align: start;
  }
  .userImg{
    width: 200px
  }
  .branchCount {
    margin-left: 5px;
  }
  .langColor {
    border: 1px solid white;
    border-radius: 50%;
    width: 10px;
    height: 10px;
    background: ${props => props.inputcolor || 'red'};
    display: inline-block;
    vertical-align: middle;
  }

`;

export default DetailsComponent;