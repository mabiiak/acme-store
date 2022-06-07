import styled from 'styled-components'

export const SectionProducts = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin-left: auto;
  margin-right: auto;
  width: 70%;

  .card {
    background-color: #EFEDED;
    border-radius: 10px;
    box-shadow: 0 5px 5px grey;
    height: 50vh;
    margin: 10px;
    margin-left: 55px;
    padding: 7px;
    width: 25%;

    a {
      color: black;
      text-decoration: none;
    };

    img {
      padding: 5px;
      width: 95%;
    };

    div {
      bottom: -20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: relative;

      h4 {
        margin-left: 5px;
        position: relative;
        top: -20px;
        text-align: left;
      };

      p {
        bottom: -45px;
        margin-left: 5px;
        position: relative;
      };
    };

    .buttons {
      bottom: -15px;
      display: flex;
      flex-direction: row;
      height: 50px;
      margin-left: 5px;
      padding: 5px;
      position: relative;
      right: -165px;
      width: 40px;
    };
  };
`;

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
