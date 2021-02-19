import React from 'react'
import CharacterCard from './CharacterCard';
import styled from 'styled-components'

    const Mcontainer =styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    `

    const Container = styled.div`
    display:flex;
    flex-flow: wrap row;
    justify-content: space-evenly;
    background-color: rgb(155, 155, 155, .6);
    width: 90%;
    height:70vh;
    padding-bottom:5%;
    margin-bottom: 5%;
    `

const Characters = props => {
    const {char} = props;
    console.log(char)

     

    

    return (
        <Mcontainer>
            <h1>Characters</h1>
            <Container>
                {char.map( item => {
                    return (
                        <CharacterCard 
                            key = {item.url}
                            name = {item.name} 
                            height = {item.height}
                            hairc = {item.hair_color}
                            eyec = {item.eye_color}
                            born = {item.birth_year}
                            gender = {item.gender}
                         />
                    )

                })}
                               
            </Container>    
        </Mcontainer>
    )









}
export default Characters;