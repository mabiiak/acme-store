import styled from 'styled-components'

export const ProductCart = styled.div`
  background-color: #EFEDED;
  border: solid 1px black;
  border-radius: 10px;
  box-shadow: 0 5px 5px grey;
  display: flex;
  margin: 10px;
  padding: 7px;
  width: 37%;

  img {
    margin-right: 10px;
    width: 150px;
  };

  #infos {
    display:flex;
    flex-direction: row;
    align-items:center;

    p {
      margin: 20px;
    };
  };

  #buttons {
    display:flex;
    flex-direction: row;
    align-items: center;

    p {
      margin-right: 10px;
      font-size: 20px;
    };
  };

  .button {
    width: 35px;
    height: 35px;
  };

  .button:last-child {
    margin-left: 1px;
    width: 30px;
    height: 30px;
  };
`;

export const CardResume = styled.div`
  background-color: #EFEDED;
  border-radius: 10px;
  box-shadow: 0 5px 5px grey;
  display:flex;
  flex-direction: row;
  margin-left:auto;
  margin-right:auto;
  margin-top: 20px;
  padding: 7px;
  width: 70%;

  .infos {
    flex-direction: column;
    margin-top: 20px;
    margin-left: 17px;

    p {
      margin-top: 10px;
    };
  };

  img {
    margin-left:7px;
    width: 300px;
    height: 300px;
    margin-top: 7px;
  };

  .buttons {
    flex-direction: row;

    img {
      width: 75px;
      height: 75px;
    };
  };
`;
