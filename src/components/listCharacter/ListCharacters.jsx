import React from 'react'
import Character from '../character/Character'
import styles from './ListCharacters.module.css'

const ListCharacter = ({items}) => {
    return (
        <div className={styles.list}>
            {
                items.map((card, index) =>
                    <Character props = {card} key={index}/>
                    )
            }
        </div>
    )
}
export default ListCharacter