import React from 'react'
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loader from '../../loader/Loader';
import CharacterService from '../../../services/HeroServices';
import { getPagesArray } from '../../../utils/Pages';
import '../../../App.css'
import ListCharacter from '../../listCharacter/ListCharacters';

const Cards = () => {
  const [characters, setCharacters] = useState([])
  const [page, setPage] = useState(1)
  const [totalPage, setTotalPage] = useState([])
  const [isPostLoading, setIsPostLoading] = useState(false);

  useEffect(()=> {
    fetchCharacters()
  }, [page]);

  async function fetchCharacters(){
    setIsPostLoading(true)
    setTimeout( async ()=>
    {
      try {
        const response = await CharacterService.getCharacters(page);
        setCharacters(response.results);
        setTotalPage(getPagesArray(response.info.pages))
        }catch (e){
          console.log(e.message)
        }finally {
          setIsPostLoading(false)}
    }, 1000)
  }

  function changePage(page){
    setPage(page);
  }
  
    return (
        <div className="App">
          {
            isPostLoading
            ?  <div className="blockLoader"> 
                <Loader/>
               </div>
            :
            <div>
            <div> <ListCharacter items={characters}/>
            <div className="myClass">
            {
              totalPage.map((index) =>
              <Button onClick={() => changePage(index)} type="button" key={index} className="btn btn-danger">{index}</Button>
            )
            }
            </div>
            </div>
            </div>
          }
        </div>
      );
}
export default Cards;