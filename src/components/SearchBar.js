import { useState } from "react";
import "./SearchBar.css";

function SearchBar({ onSubmit }) {
    const [term, setTerm] = useState ('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        onSubmit(term);
    };

    const handleChange = (e) => {
        setTerm(e.target.value);
    };
    return <div className="search-bar">
        <p><b>Search</b></p>
       <form onSubmit={handleFormSubmit}> 
            <input value={term} onChange={handleChange}/>
       </form>
    </div>
}

export default SearchBar;