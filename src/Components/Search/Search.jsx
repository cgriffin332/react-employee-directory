import React from 'react';

const Search = (props) => {
    return (
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4">
            <p className="text-center">Search Employee's Last Name:</p>
            <input
              className="form-control mb-4"
              onChange={props.onChange}
            ></input>
          </div>
          <div className="col-4"></div>
        </div>
    );
};

export default Search;