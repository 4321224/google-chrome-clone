import React from "react";

function SearchDataPage({ data }) {
  return (
    <div className="container search-page-data px-5">
      <div className="row px-1">
        <div className="col-md-12 py-3">
          <p className="small font-weight-light">
            About {data.searchInformation.formattedTotalResults} result (
            {data.searchInformation.formattedSearchTime} seconds ){" "}
          </p>
          {data.items.map((item) => (
            <div key={item.displayLink}>
                
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default SearchDataPage;
