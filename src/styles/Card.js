import styled from 'styled-components'

export const CardResume = styled.div`
  height: 80vh;

  #card {
    background-color: white;
    box-shadow: 0 2px 2px grey;
    display:flex;
    flex-direction: row;
    margin-left:18%;
    margin-right:18%;
    margin-top: 3%;
    padding: 0.5%;

    img {
      margin-left:7px;
      width: 300px;
      height: 300px;
      margin-top: 7px;
    };
  
    .infos {
      flex-direction: column;
      margin-left: 2%;

      h3 {
        text-align:center;
        margin-top: 20px;
        margin-left: 17px;
        margin-bottom: 20px;
      }

      p {
        margin-left: 5%;
        margin-top: 10px;
        width: 90%;
        font-size: 20px;
      };

      #buttons {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 5px;
        width: 30%;
        margin-left:60%;
        
        .buttonIcon {
          border-radius: 50%;
          border: none;
          background-color: none;
          width: 50%;
          height: 90%;
        }

        .buttonIcon:active{
          background-color: #BC0001;
        }
      };
    };
  };

  @media only screen and (max-width: 1000px){
    #card {
      display:flex;
      flex-direction: column;
      margin-left:10%;
      margin-right:10%;
      padding: 1%;

      img {
        width: 60%;
        height: 60%;
        margin-top: 10px;
        margin-left:auto;
        margin-right:auto;
      };

      .infos {
        flex-direction: column;
        margin-left: 2%;


        p {
          margin-top: 30px;
          width: 90%;
        };

        #buttons {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          padding: 5px;
          width: 30%;
          margin-left:33%;
          
          .buttonIcon {
            border-radius: 50%;
            border: none;
            background-color: none;
            width: 50%;
            height: 90%;
          }
        }
      }
    }
  }
`;
