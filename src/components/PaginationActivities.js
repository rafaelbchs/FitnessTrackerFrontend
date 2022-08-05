import React from "react";

const PaginationActivities = (props) => {
  const { nPages, currentPageActivity, setCurrentPageActivity } = props;
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  const nextPage = () => {
    if (currentPageActivity !== nPages)
      setCurrentPageActivity(currentPageActivity + 1);
  };
  const prevPage = () => {
    if (currentPageActivity !== 1)
      setCurrentPageActivity(currentPageActivity - 1);
  };

  return (
    <div style={{ width: "100%", display: "flex" }}>
      <nav style={{ margin: "0 auto" }}>
        <ul className="pagination justfiy-content-center">
          <li className="page-item">
            <a className="page-link" onClick={prevPage} href="#">
              Previous
            </a>
          </li>
          {pageNumbers.map((pgNumber) => (
            <li
              key={pgNumber}
              className={`page-item ${
                currentPageActivity == pgNumber ? "active" : ""
              } `}
            >
              <a
                onClick={() => setCurrentPageActivity(pgNumber)}
                className="page-link"
                href="#"
              >
                {pgNumber}
              </a>
            </li>
          ))}
          <li className="page-item">
            <a className="page-link" onClick={nextPage} href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default PaginationActivities;
