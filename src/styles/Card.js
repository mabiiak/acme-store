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
    height: 350px;
    margin: 9px;
    padding: 7px;
    width: 22%;

    a {
      color: black;
      text-decoration: none;
    }

    img {
      padding: 5px;
      width: 95%;
    }

    div {
      bottom: -20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-top: 0;
      position: relative;

      h4, p {
        margin-bottom: 0;
        margin-left: 5px;
      }

      p {
        bottom: -34px;
        position: relative;
      }
    }

    .buttons {
      bottom: -10px;
      display: flex;
      flex-direction: row;
      height: 50px;
      margin-left: 5px;
      padding: 5px;
      position: relative;
      right: -125px;
      width: 40px;
    }
  }
`
