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
      position: relative;

      h4 {
        margin-left: 5px;
        position: relative;
        top: -20px;
        text-align: left;
      }

      p {
        bottom: -45px;
        margin-left: 5px;
        position: relative;
      }
    }

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
    }
  }
`

export const ProductCart = styled.div`
  background-color: #EFEDED;
  border: solid 1px black;
  border-radius: 10px;
  box-shadow: 0 5px 5px grey;
  display: flex;
  margin: 10px;
  padding: 7px;
  width: 60%;

  img {
    margin-right: 10px;
  }
`
