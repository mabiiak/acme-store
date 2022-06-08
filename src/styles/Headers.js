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
`;

export const Title = styled.div`
  padding: 5px;
  height: 30px;

  h3 {
    margin-left: 19%;
  };
`;
