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
    margin: 9px;
    padding: 7px;
    width: 22%;
    height: 365px;

    img {
      padding: 5px;
      width: 95%;
    }

    div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: relative;
      bottom: -20px;
      margin-top: 0;

      h4 {
        margin-left: 5px;
        margin-bottom: 0;
      }

      div {
        display: flex;
        flex-direction: row;
        align-items: center;
        
        p {
          margin-left: 5px;
          width: 50%;
          height: 40px;
        }
        
        .button {
          align-items: flex-end;
          margin-left: 5px;
          padding: 5px;
          width: 40px;
          height: 40px;
        }   
      }
  }
  }
`
