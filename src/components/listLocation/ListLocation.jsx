import React from 'react'
import Location from '../location/Location';

const ListLocation = ({locations}) => {
    return (
        <div style={{paddingTop: 30 + 'px'}}>
            {
                locations.map((location, index)=>
                <Location props={location} key={index}/>
                )
            }
        </div>
    )
}

export default ListLocation;