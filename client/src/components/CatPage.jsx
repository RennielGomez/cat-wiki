import React, { useEffect, useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import CharacterRate from './CharacterRate';
import Axios from 'axios';

function CatPage() {

    const location = useLocation();
    console.log(location.state.dataset);
    const breed_id = location.state.dataset.id;
    const imageId = location.state.dataset.reference_image_id;
    const description = location.state.dataset.description;
    const temperament = location.state.dataset.temperament;
    const origin = location.state.dataset.origin;
    const lifespan = location.state.dataset.life_span;
    const adaptability = location.state.dataset.adaptability;
    const affection_level = location.state.dataset.affection_level;
    const child_friendly = location.state.dataset.child_friendly;
    const grooming = location.state.dataset.grooming;
    const intelligence = location.state.dataset.intelligence;
    const health_issues = location.state.dataset.health_issues;
    const social_needs = location.state.dataset.social_needs;
    const stranger_friendly = location.state.dataset.stranger_friendly;

    const [catImage, setCatImage] = useState([`https://cdn2.thecatapi.com/images/${imageId}.jpg`]);

    const copyOfCatImage = useMemo(() => {
        return catImage;
    }, [catImage])

    useEffect(() => {
        Axios.post('http://localhost:3000/cat-page', { breed_ids: breed_id })
            .then(res => {
                setCatImage(() => [...res.data])
            })
    }, [])

    return (
        <div className='py-4 md:px-8 md:py-10'>
            <img className='rounded-md w-full md:px-8 rounded-md float-none md:float-left md:w-2/4' src={`https://cdn2.thecatapi.com/images/${imageId}.jpg`} />
            <div className='flex flex-col gap-4 py-8 md:py-0'>
                <div>
                    <h1 className='font-bold md:text-lg'>Description</h1>
                    <p>{description}</p>
                </div>
                <div>
                    <h1 className='font-bold md:text-lg'>Temperament</h1>
                    <p>{temperament}</p>
                </div>
                <div>
                    <h1 className='font-bold md:text-lg'>Origin</h1>
                    <p>{origin}</p>
                </div>
                <div>
                    <h1 className='font-bold md:text-lg'>Life Span</h1>
                    <p>{lifespan}</p>
                </div>

                <CharacterRate rating={adaptability} label={"Adaptability"} />
                <CharacterRate rating={affection_level} label={"Affection Level"} />
                <CharacterRate rating={child_friendly} label={"Child Friendly"} />
                <CharacterRate rating={grooming} label={"Grooming"} />
                <CharacterRate rating={intelligence} label={"Intelligence"} />
                <CharacterRate rating={health_issues} label={"Health Issues"} />
                <CharacterRate rating={social_needs} label={"Social Needs"} />
                <CharacterRate rating={stranger_friendly} label={"Stranger Friendly"} />
            </div>
            <h1 className='font-bold text-lg my-4'>Other Photos</h1>
            <div className='gap-2 masonry-container my-8'>
                {catImage.map((image, imageIndex) => {
                    return <img key={image.id + imageIndex} id={image.id} className='rounded-md masonry-item rounded-md my-2 cat-image' src={image.url} />;
                })}
            </div>
        </div>
    )
}

export default CatPage