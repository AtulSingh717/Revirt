import React from 'react';
import Tilt from 'react-parallax-tilt';  // Using react-parallax-tilt package to get tilt effect of the cards
import './Cards.css';                     // As react-tilt is not compatible with React17


function Cards(props) {

    // console.log(props.photos); -----    Recived the data(fetched from API) from the parent component

     // Using map to create a card from the fetched data
    const photos = props.photos.slice(0,5).map((photo) => { // Using slice to use only 5 arrays out of 5000 received arrays 
           return   <div key={photo.id} className="col">
                        <Tilt>
                            <div className="card">
                            <img src={photo.url} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">{photo.id}</h5>
                                <p className="card-text">{photo.title}</p>
                            </div>
                            </div>
                        </Tilt>
                    </div>                  
    })    
    return (
        <>
            {photos}
        </>
    )
}

export default Cards;
