import React from "react";
import useSWR from "swr";

const FetchDataSWR = () => {
  const { data, error } = useSWR("http://localhost:3001/users", {
    refreshInterval: 2,
  });

  if (error) {
    return <h1>{error}</h1>;
  } else {
    return (
      <>
        <div className="fatchApp">
          {data ? (
            data.map((user) => {
              return <h1>{user}</h1>;
            })
          ) : (
            <h1>Loading...</h1>
          )}
        </div>
      </>
    );
  }
};
export default FetchDataSWR;
