// Write your Character component here
import React from 'react'
import styled from 'styled-components'

    const Card = styled.div`
    width: 30%;
    padding-top: 2%;
    padding-bottom:2%:
    `
    const Bname = styled.h2`
    font-size: 1.5rem;
    font-family: fantasy;
    `
    
    const Traits = styled.p`
    font-size:1.2rem;
    font-family: fantasy;    
    `

const CharacterCard = props => {
    
    const {name, height, hairc, eyec, born, gender} = props;

    
    return (
        <Card>
            <Bname>{name}</Bname>
            <div>
                <Traits>Height: {height}cm</Traits>
                <Traits>Hair Color: {hairc}</Traits>
                <Traits>Eye Color: {eyec}</Traits>
                <Traits>Birth Year: {born}</Traits>
                <Traits>Gender: {gender}</Traits>
            </div>
        </Card>  
            
    )
}
export default CharacterCard;