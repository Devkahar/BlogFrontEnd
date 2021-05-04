import React, { useState } from 'react'
import SearchIcon from '@material-ui/icons/Search';
import "./style.css"
const Search = () => {
    const [query, setQuery]  = useState('');
    const [displayToggler,setdisplayToggler] = useState(false);

    const querySubmitHandler = (e)=>{
        e.preventDefault();
        console.log('query ->', query);
    }
    return (
        <>
            <div onClick={()=> setdisplayToggler(!displayToggler)} className={`s-icon ${displayToggler && 's-icon-d'}`}>
                <SearchIcon/>
            </div>
            <form onSubmit={querySubmitHandler} className="searchContainer">
                <input  className={`${displayToggler? 'd-searchInput': 'searchInput' }`} type="text" placeholder="Search Medium" value={query} onChange={e => setQuery(e.target.value)} />
                <input type="submit" className="searchSubmit"/>
            </form>
        </>
    )
}

export default Search
