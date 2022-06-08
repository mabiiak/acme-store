import styled from 'styled-components'

export const BaseCart = styled.div`
  background-color: white;
  box-shadow: 0 5px 5px grey;
  display: flex;
  margin: 10px;
  margin-left: 18%;
  margin-right: 18%;
  margin-top: 20px;
  padding: 7px;
  display: flex;
  flex-direction: column;
  align-items: center;

  #itensCart {
    margin: 10px;
    padding: 10px;
    align-items: center;
    display: flex;
    margin-bottom: 30px;
    width: 80%;

    #picture {
      margin-right: 10px;
      width: 50%;
      height: 50%;
    };

    h4{
      margin-right: 5%;
    }

    p {
      margin-right: 5%;
    };

    #button {
      width: 30%;
      height: 30%;
    }
  }

  #emptyCart {
    background-color: #EFEDED;
    height: 30vh;
    margin-bottom: 10px;
    display: flex;
    align-items:center;
    justify-content: center;
    width: 35vw;
  }

  @media only screen and (max-width:1000px) {
    #itensCart {
      width: 92%;
      flex-direction: column;

      img {
        margin-right: 10px;
        width: 40%;
        height: 40%;
      };

      h4{
        margin-right: 3%;
      }

      p {
        margin-right: 3%;
      };

    #buttonTrash img {
      width: 40px;
      height: 40px;
    }
  }
  }

  @media only screen and (max-width:400) {
    margin-left: 5%;
    margin-right: 5%;

    #itensCart {
      flex-direction: column;

      #picture {
        margin-right: 10px;
        width: 50%;
        height: 50%;
        margin-bottom: 5px;
      };

      h4{
        margin-right: 5%;
      }

      p {
        margin-right: 3%;
      };

      #buttonTrash img {
        width: 40px;
        height: 40px;
      }
    }
  }
`;

export const Total = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1%;
  background-color: #EFEDED;
  padding: 10%;
  width: 74%;
  align-items: center;

  button {
    background-color: #BC0001;
    border: none;
    padding: 5%;
    color: white;
    box-shadow: 0 5px 5px grey;
    margin-top: 15px;
  }
`
