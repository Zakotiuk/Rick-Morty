import React from 'react'
import { useNavigate } from 'react-router-dom';

const Character = (props) =>
{
    const router = useNavigate();
    return(
        <div onClick={()=> router(`/cards/${props.props.id}`)} className="card cardStyle" style={{width: 18 + 'rem', display: 'inline-table', marginRight: 10, marginTop: 30, cursor: 'pointer'}}>
            <img src={props.props.image} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.props.name}</h5>
                <p className="card-text">Species : {props.props.species}, Status: {props.props.status}</p>
            </div>
        </div>
    )
}

export default Character;