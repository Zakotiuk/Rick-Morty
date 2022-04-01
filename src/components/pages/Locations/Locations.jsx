import { Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../App.css'
import styles from './Locations.module.css'
import React from 'react'
import { useEffect, useState, useMemo } from 'react';
import LocationService from '../../../services/LocationServices';
import { getPagesArray } from '../../../utils/Pages';
import { useFetching } from '../../hooks/useFetching';
import ListLocation from '../../listLocation/ListLocation';
import Loader from '../../loader/Loader';
import { usePosts } from '../../hooks/usePosts';

const Locations = () => {

    const [locations, setLocations] = useState([])
    const [page, setPage] = useState(1)
    const [totalPage, setTotalPage] = useState([])
    const [searchQuery, setSearchQuery] = useState('')

    const [fetchLocations, isPostsLoading, postError] = useFetching(async() => {
        const response = await LocationService.getLocations(page);
        setLocations(response.results);
        setTotalPage(getPagesArray(response.info.pages))
    });

    const sortedPosts = usePosts(locations, searchQuery);

    useEffect(()=>{
        fetchLocations();
    }, [page])


    function changePage(page){
        setPage(page)
    }

    return (
        <div className="App">
            {
                isPostsLoading
                ? 
                    <div className="blockLoader"> 
                        <Loader/>
                    </div>
                :
                <div>
                    <Container>
                    <form style={{paddingTop: 80 + 'px'}} className="d-flex">
                        <input value={searchQuery} onChange={e=> setSearchQuery(e.target.value) } className="form-control" type="search" placeholder="What type of location do you want to find..." aria-label="Search"/>
                        {/* <button className={styles.button} onClick={()=> searchedPosts()}>Search</button> */}
                    </form>
                    </Container>
                <div><ListLocation locations={sortedPosts}/></div>
                <div className="myClass">
                {
                    totalPage.map((index) =>
                    <Button onClick={() => changePage(index)} type="button" key={index} className="btn btn-danger">{index}</Button>
                    )
                }
                </div>
                </div>
            }
            
        </div>
    )
}

export default Locations;