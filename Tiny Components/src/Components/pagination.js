import "./pagination.css";
import React, { useState } from "react";
import JSONData from "../MOCK_DATA.json";
import ReactPagination from "react-paginate";

const Pageination = () => {
  const [users, setUsers] = useState(JSONData.slice(0, 50));
  const [pageNumber, setPageNumber] = useState(0);
  const perpageData = 10;
  const pageVisited = pageNumber * perpageData;

  const displayUsers = users
    .slice(pageVisited, pageVisited + perpageData)
    .map((user) => {
      return (
        <div className="user" key={user.id}>
          <h3>{user.id}</h3>
          <h3>{user.firstName}</h3>
          <h3>{user.lastName}</h3>
          <h3>{user.email}</h3>
        </div>
      );
    });

  const pageCount = Math.ceil(users.length / perpageData);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <div className="pageApp">
      {displayUsers}
      <ReactPagination
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
};
export default Pageination;
