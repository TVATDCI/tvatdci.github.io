import { useState, useEffect } from "react";

const useCustomHook = (url) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url);
            const result = await response.json();
            setData(result);
        };

        fetchData();

        // Clearing the data when the component unmounts
        return () => setData(null);

    }, [url]);

    return data;
};

export default useCustomHook;
