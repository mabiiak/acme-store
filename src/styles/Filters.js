import styled from 'styled-components'

export const DivFilters = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  margin-left: 18.2%;
  margin-right:18.9%;
  
  input {
    border: none;
    border-radius: 10px;
    height: 50px;
    text-align: center;
    width: 93%;
  };

  #favorites {
    /* background-color: red; */
    padding: 5px;
  }

  .beforeClick {
    display: block;
  }

  .afterClick {
    display: none;
  }
`;
