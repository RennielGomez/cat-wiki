import React, { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';

function Search() {

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
    const [filteringResult, setFilteringResult] = useState(catBreeds);
    const [searchKeyWord, setSearchKeyWord] = useState();

    useEffect(() => {
        setFilteringResult(() => {
            catBreeds.filter((catBreed) => {
                return catBreed.includes(searchKeyWord);
            })
        })
    }, [searchKeyWord])

    function filterBreeds(event) {
        const value = event.target;
        setSearchKeyWord(value);
    }

    return (
        <form autoComplete="off" >
            <div className="autocomplete" style={{ width: "300px" }}>
                <input id="myInput" value={searchKeyWord} onChange={filterBreeds} type="text" name="catBreeds" placeholder="Enter Cat Breed" />
                <div>
                    {
                        // filteringResult.map((filteredBreed, filterIndex) => {
                        //     return <div key={filteredBreed + filterIndex} className='text-black bg-white h-8'>{filteredBreed}</div>
                        // })
                    }

                </div>
            </div>
            <button className='text-white bg-orange-500 p-3' type='submit'><SearchIcon /></button>
        </form>
    )
}

export default Search