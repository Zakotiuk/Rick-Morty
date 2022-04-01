import React from 'react'
import { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import CharacterService from '../../../services/HeroServices'
import { useFetching } from '../../hooks/useFetching'
import styles from './CardById.module.css'

const CardById = () => {
    const params = useParams();
    const [character, setCharacter] = useState([])

    const [fetchCardById, isLoading] = useFetching(async () => {
        const response = await CharacterService.getCharacterById(params.id)
        console.log(response)
        setCharacter(response);
        console.log(character)
    })

    useEffect(()  =>{
        fetchCardById();
    }, [])
    console.log(character);

    return (
        <Container >
        <div className={styles.cardSt}>
        <div className="card" style={{width: 40 + '%'}}>
            <img className="card-img-bottom" src={character.image} alt="Image of character"/>
        <div className="card-body">
            <h5 className="card-title">{character.name}</h5>
        </div>
        <ul className="list-group list-group-flush">
            <li className="list-group-item">Species : {character.species}</li>
            <li className="list-group-item">Gender : {character.gender}</li>
        </ul>
        </div>
        </div>
        </Container>
    )
}

export default CardById;