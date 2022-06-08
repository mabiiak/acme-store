import styled from 'styled-components'

export const ResumeProduct = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin-left: auto;
  margin-right: auto; 
  justify-content:center;
  background-color: white;
  margin-left: 18%;
  margin-right: 18%;
  box-shadow: 0 2px 2px grey;
  justify-content: space-around;

  .card {
    background-color: #efebeb;
    display:flex;
    flex-direction: column;
    margin: 5px;
    margin-top: 25px;
    padding: 7px;
    padding-bottom: 10px;
    width: 12vw;
    align-items: center;

    a {
      color: black;
      text-decoration: none;
      align-items: center;
    };

    img {
      padding: 2%;
      width: 95%;
    };

    h4 {
      margin-left: auto;
      margin-right: auto;
      width: 80%;
      margin-bottom: 10px;
      text-align: center;
    };

    p {
      margin-left: 2%;
      margin-bottom: 10px;
    };

    #infos {
      display: flex;
      flex-direction: row;

      #buttons {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 5px;
        width: 90%;

        .buttonIcon {
          border-radius: 50%;
          border: none;
          background-color: none;

          img {
            padding: 5px;
            width: 55px;
          }
        }

        .buttonIcon:active{
          background-color: #BC0001;
        }

        img {
          width: 50%;
          height: 90%;
        }
      };
    };
  };

  @media(max-width: 1000px) {
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;

    .card {
      margin: 20px;
      padding: 7px;
      padding-bottom: 20px;
      width: 35vw;

      #infos {
        margin-top: 10%;
  
        .buttonIcon {
          border-radius: 50%;
          border: none;
          background-color: none;

          img {
            padding: 5px;
            width: 55px;
          }
        }

        .buttonIcon:active{
          background-color: #BC0001;
        }

        img {
          width: 50%;
          height: 90%;
        }
      };
    };
  }

  @media screen and (max-width: 650px) {
    .card {
      display: flex;
      flex-direction: column;
      padding: 03%;
      width: 70%;
      padding: 5px;

      img {
        height: 95%;
        width: 95%;
        padding: 3%;
        margin-top: 5%;
      }

      h4 {
        width: 60%;
        text-align: center;
      };
      
      p {
        margin-left: 55%;
        margin-top: 30%;
        width: 100%;
      };

      #infos {
        margin-top: 25%;
  
        .buttonIcon {
          border-radius: 50%;
          border: none;
          background-color: none;

          img {
            padding: 5px;
            width: 55px;
          }
        }

        .buttonIcon:active{
          background-color: #BC0001;
        }

        img {
          width: 50%;
          height: 90%;
        }
      };
    };
  };
`
