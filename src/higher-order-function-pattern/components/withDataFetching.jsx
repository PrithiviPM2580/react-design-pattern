import { useEffect } from "react";
import { useState } from "react";

const withDataFetching = (WrapperComponenet) => {
  return (props) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async (url) => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    useEffect(() => {
      fetchData("https://jsonplaceholder.typicode.com/posts");
    }, []);

    if (isLoading) {
      return <p>Loading...</p>;
    }

    if (error) {
      return <p>Error: {error}</p>;
    }
    return <WrapperComponenet data={data} {...props} />;
  };
};

export default withDataFetching;
