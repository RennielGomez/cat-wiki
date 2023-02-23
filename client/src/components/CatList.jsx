import React, { useState, useMemo, useEffect } from 'react';
import Axios from 'axios';
import Image from './Image';
import { Link } from 'react-router-dom';

function CatList() {

    const [catData, setCatData] = useState([]);

    let copyOfCatData = useMemo(() => {
        return catData;
    }, [catData])

    useEffect(() => {
        Axios.get("http://localhost:3000/cat-list")
            .then(res => {
                setCatData(() => [...res.data])
            })
    }, [])



    return (
        <div className='masonry-container'>
            {copyOfCatData.map((catDatum) => {
                if (catDatum.name == "Bengal" || catDatum.name == "Devon Rex") {
                    return
                }
                return <div key={catDatum.id} id={catDatum.id} className="masonry-item cat-image">
                    <Link to={'/cat-page'} state={{ dataset: catDatum }}>
                        <img className='rounded-md' src={`https://cdn2.thecatapi.com/images/${catDatum.reference_image_id}.jpg`} />
                    </Link>
                    <h4 className='text-center bg-white rounded-md'>{catDatum.name}</h4>
                </div>
            })}
        </div>
    )
}

export default CatList