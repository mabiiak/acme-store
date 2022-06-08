import styled from 'styled-components'

export const ResumeProduct = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin-left: auto;
  margin-right: auto; 
  justify-content:center;

  .card {
    background-color: #EFEDED;
    box-shadow: 0 2px 2px grey;
    display:flex;
    flex-direction: column;
    margin: 20px;
    padding: 7px;
    padding-bottom: 20px;
    width: 20vw;

    a {
      color: black;
      text-decoration: none;
    };

    img {
      padding: 2%;
      width: 95%;
    };

    h4 {
      margin-left: 2%;
      width: 35%
    };

    #infos {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      align-content: flex-end;
      align-items: center;
      margin-top: 10px;

      p {
        margin-left: 2%;
      };
      
      #buttons {
        display: flex;
        flex-direction: row;
        height: 50px;
        padding: 5px;
        position: relative;
        right: 15%;
        width: 50px;

        .img {
          width: 5%;
          height: 5%;
        }
      };
    };
  };

  @media(max-width: 1250px) {
    .card {
      #infos {
        flex-direction: row;
        justify-content: space-between;

        p {
          margin-left: 2%;
        };
        
        #buttons {
          padding: 5px;
          margin-right: 3%;

          .img {
            width: 3%;
            height: 3%;
          };
        };
      };
    };
  };

  @media(max-width: 1000px) {
    width: 90%;

    .card {
      margin: 20px;
      padding: 7px;
      padding-bottom: 20px;
      width: 35vw;

      #infos {
        flex-direction: row;
        justify-content: space-between;
        margin: 2px;

        p {
          margin-left: 2%;
        };
        
        #buttons {
          padding: 5px;
          margin-right: 2%;

          .img {
            width: 3%;
            height: 3%;
          };
        };
      };
    };
  }

  @media screen and (max-width: 650px) {
    .card {
      display: flex;
      flex-direction: column;
      padding: 3px;
      width: 100vw;
      height: 20vh;

      img {
        height: 142px;
        width: 142px;
        padding: 5px;
      }
      h4 {
        position: relative;
        top: -75%;
        left: 20%;
        width: 90%;
        text-align: center;
      };
      #infos {
        flex-direction: column;

        p {
          position:relative;
          top: -45%;
          left: 52%;
          width: 100%;
        };
        
        #buttons {
          padding: 10px;
          margin-right: 90%;
          margin-top: 40%;
          position: relative;
          top: -116%;
          left: 53%;
          
          img {
            height: 100%;
            width: 130%;
          };
        };
      };
    };
  }
`
