import React, {useState} from 'react';
import axios from 'axios';

import "../css/pages.css"



function Movies() {

    const [values, setFormData] = useState({
        searchString: ''
    });

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const {name, value} = e.target
        setFormData({...values, [name]: value});
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const formData = {
            searchString: values.searchString
        }
        axios.get('http://localhost:8080/movieapi', {data: formData})
        .then(response => console.log(response.data))
        .then(error => console.error(error));
    };

    return (
        <div>
            <div>
                <h1>Movies</h1>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <input type='text' name='searchString' value={values.searchString} onChange={handleChange} placeholder='Search movie' />
                </form>
            </div>
        </div>
    )
}

export default Movies;