import { useEffect, useState } from "react";

const useBooksData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await fetch("./books.json");
      const data = await res.json();
      setData(data);
      setLoading(false);
    };
    fetchData();
  }, []);
  return { data, loading };
};

export default useBooksData;
