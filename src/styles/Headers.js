import styled from 'styled-components'

export const HeaderOne = styled.header`
  align-items: center;
  border-bottom: solid 3px #BC0001;
  display: flex;
  justify-content: space-between;
  margin-left: 18%;
  margin-right:18%;

  a {
    color: #BC0001;
    text-decoration: none;
    padding: 5px;
  };

  #buttonCart{
    display:flex;
    align-items: center;

    p {
      font-size: 25px;
    }
  }

  @media screen and (max-width: 650px) {
    margin-left: 5%;
    margin-right:5%;

    #buttonCart{
    display:flex;
    align-items: center;

      p {
        font-size: 15px;
      }
    }
  }
`;

export const Title = styled.div`
  padding: 5px;
  height: 30px;

  h3 {
    margin-left: 19%;
    color: #BC0001;
  };

  @media screen and (max-width: 650px) {
    h3 {
      margin-left: 5%;
    };
  }
`;
