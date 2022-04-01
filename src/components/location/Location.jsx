import React from 'react'

const Location = (props) => {
    return (

        <div className="card" style={{width: 22 + 'rem', display: 'inline-table', margin: 15 + 'px'}}>
        <div className="card-header">
            <b>{props.props.name}</b></div>
        <ul className="list-group list-group-flush">
            <li className="list-group-item"> <i>Type :</i> {props.props.type}</li>
            <li className="list-group-item"><i>Dimension : </i>{props.props.dimension}</li>
        </ul>
        </div>
    )
}
export default Location;