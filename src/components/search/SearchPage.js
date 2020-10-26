import React, { useMemo } from 'react';
import queryString from 'query-string';
import { HeroCard } from '../heroes/HeroCard';
import { useForm } from '../../hooks/useForm';
import { useLocation } from 'react-router-dom';
import { getHeroesByName } from '../../selectors/getHeroesByName';


export const SearchPage = ({ history }) => {

    const location = useLocation();
    const { q = '' } = queryString.parse( location.search );

    const [ formValues, handleInputChange ] = useForm({
        searchText: q
    });
    const { searchText } = formValues;

    const heroesFiltered = useMemo(() => getHeroesByName ( q ), [q]);
    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${ searchText }`);
    }
    return (
        <div>
            <h1 className="mt-2 ml-2">Search Screen</h1>
            <hr />
            <div className="container search">
                <div className="col-5">
                    <form className="searchForm" onSubmit={ handleSearch }>
                        <input
                            type="text"
                            placeholder="Find your hero"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={ searchText }
                            onChange={ handleInputChange }
                        />

                        <button
                            type="submit"
                            className="btn m-2 btn-outline-primary"
                        >
                            Search...
                        </button>
                    </form>
                </div>
                <div className="searchResults col-7">
                    <h4> Results </h4>
                    <hr />
                    {
                        (q ==='')
                            &&
                            <div className="alert alert-info">
                                Search a hero
                            </div>
                    }
                    {
                        (q !=='' && heroesFiltered.length === 0 ) 
                            && 
                            <div className="alert alert-danger">
                                There is no a hero with { q }
                            </div>
                    }
                    {
                        heroesFiltered.map( hero => (
                            <HeroCard 
                                key={ hero.id }
                                { ...hero }
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
