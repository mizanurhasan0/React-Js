import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import axios from "axios";

function Data() {
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      setError(false);
      setLoading(true);

      try {
        const response = await axios("https://random.dog/woof.json");
        setData(response.data);
      } catch (e) {
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  if (isError) return <h1>Error,try Again</h1>;
  if (isLoading) return <h3>Loading ...</h3>;

  return (
    <div>
      <img style={{ width: `400px`, height: `400px` }} src={data.url} />
      {/* {console.log(data)} */}
    </div>
  );
}

export default Data;
