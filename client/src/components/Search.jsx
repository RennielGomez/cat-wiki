import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

function Search() {

    const [inputBreed, setInputBreed] = useState();

    const catBreeds = ["Abyssinian", "Aegean", "American Bobtail", "American Curl", "American Shorthair", "American Wirehair", "Arabian Mau", "Australian Mist",
        "Balinese", "Bambino", "Bengal", "Birman", "Bombay", "British Longhair", "British Shorthair", "Burmese", "Burmilla",
        "California Spangled", "Chantilly-Tiffany", "Chartreux", "Chausie", "Cheetoh", "Colorpoint Shorthair", "Cornish Rex", "Cymric", "Cyprus",
        "Devon Rex", "Donskoy", "Dragon Li",
        "Egyptian Mau", "European Burmese", "Exotic Shorthair",
        "Havana Brown", "Himalayan",
        "Japanese Bobtail", "Javanese",
        "Khao Manee", "Korat", "Kurilian",
        "LaPerm",
        "Maine Coon", "Malayan", "Manx", "Munchkin",
        "Nebelung", "Norwegian Forest Cat",
        "Ocicat", "Oriental",
        "Persian", "Pixie-bob",
        "Ragamuffin", "Ragdoll", "Russian Blue",
        "Savannah", "Scottish Fold", "Selkirk Rex", "Siamese", "Siberian", "Singapura", "Snowshoe", "Somali", "Sphynx",
        "Tonkinese", "Toyger", "Turkish Angora", "Turkish Van",
        "York Chocolate"
    ]

    const [filteredBreeds, setFilteredBreeds] = useState();

    function filterBreeds(event) {
        const { value } = event.target;
        setInputBreed(value);
        setFilteredBreeds(() => {
            return catBreeds.filter((catBreed) => {
                if (catBreed.includes(inputBreed)) {
                    return catBreed;
                }
            })
        })
    }

    return (
        <form autoComplete="off" >
            <div className="autocomplete" style={{ width: "300px" }}>
                <input id="myInput" value={inputBreed} onChange={filterBreeds} type="text" name="catBreeds" placeholder="Enter Cat Breed" />
                <div>
                    {
                    //  filteredBreeds.filter((filteredBreed) => {
                    //         return <div className='text-white'>{filteredBreed}</div>
                    //     })    
                    }
                  
                </div>
            </div>
            <button className='text-white bg-orange-500 p-3' type='submit'><SearchIcon /></button>
        </form>
    )
}

export default Search