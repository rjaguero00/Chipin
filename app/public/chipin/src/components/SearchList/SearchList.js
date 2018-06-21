import React from 'react';
import SearchItem from '../SearchItem'

const SearchList = ({ children }) =>
    <div id="searchList" className="card">
        <h4 id="searchListHeader" className="search-header text-center">Results</h4>
        <div className="card-body">
            {children[0] ?
                children.slice(0,5).map(activity => {
                    return (
                        <SearchItem key={activity._id} title={activity.title} body={activity.body} location={activity.location} />
                    )
                }) :
                <h5>Please Enter a Search</h5>
            }
        </div>
    </div>;

export default SearchList;