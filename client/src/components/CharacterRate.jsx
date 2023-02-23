import React from 'react'

function CharacterRate({ rating, label }) {

    const levelOfRating = [1, 2, 3, 4, 5];

    return (
        <div className='flex'>
            <h1 className='font-bold md:text-lg'>{label}</h1>
            <div className='flex items-center'>
                {levelOfRating.map(level => {
                    const bar = level <= rating ?
                        <div key={label + level} className='w-8 h-1.5 md:w-16 md:h-2 bg-orange-700 mx-2 rounded-md'></div> :
                        <div key={label + level} className='w-8 h-1.5 md:w-16 md:h-2 bg-stone-400 mx-2 rounded-md'></div>;
                    return bar;
                })}
            </div>
        </div>
    )
}

export default CharacterRate