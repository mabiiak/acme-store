import styled from 'styled-components'

export const DivFilters = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  margin-left: 18%;
  margin-right:18%;

  input {
    background-color: #efebeb;
    border: none;
    border-radius: 10px;
    height: 50px;
    text-align: center;
    width: 80%;
  };
  
  #buttonFav {
    padding: 15px;
    display: flex;
    align-items: center;

    p {
      color: #BC0001;
      margin: 5px;
    }
  }

  @media screen and (max-width: 650px) {
    margin-left: 5%;
    margin-right:5%;

    #buttonFav {
    padding: 15px;
    display: flex;
    align-items: center;

    p {
      color: #BC0001;
      margin: 5px;
      font-size: 10px;
    }
  }
`;
