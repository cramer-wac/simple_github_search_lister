import React from 'react';

import { connect } from 'react-redux';

import Gitapi from "../../gitapi";

let client = new Gitapi();

function RepoSearch(props){
    return(
        <div>
            <h1>Repo Search</h1>
            <form onSubmit={(event) => props.handleSubmit(event, props.inputValue)}>
                <input value={props.inputValue} onChange={props.handleInputChange}/>
            </form>
            <ul>
                {props.repos.map((repo) => {
                    return <li key={repo.id}><a href={repo.html_url}>{repo.name}</a></li>
                })}
            </ul>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        inputValue: state.searchInputValue,
        repos: state.repos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputChange: (event) => {
            console.log('handle input change happening');
            dispatch({type: 'SEARCH_INPUT_CHANGE', value: event.target.value})
        },

        handleSubmit: (event, query) => {
            event.preventDefault();
            
            client.getRepos(query).then(result => {
                dispatch({type: 'SET_REPOS', repos: result.data.items});
            });

            
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(RepoSearch);