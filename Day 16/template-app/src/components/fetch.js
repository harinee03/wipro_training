// Demo: Custom Hook for Data Fetching without error handling and simple logic without async
import React, { useState, useEffect } from "react";
export default function DataFetcher({ url }) {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch(url)

            .then((response) => response.json())
            .then((json) => setData(json));
    }
    , [url]); // Effect runs when url changes
    return (
        <div>
            <h2>Data Fetcher</h2>
            <pre>{data ? JSON.stringify(data, null, 2) : "Loading..."}</pre>

        </div>
    );
}
