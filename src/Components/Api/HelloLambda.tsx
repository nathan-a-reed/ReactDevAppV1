// Components/Api/HelloLambda.tsx
import { useState } from 'react';

function HelloLambda() {
    const [message, setMessage] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [isDataFetched, setIsDataFetched] = useState<boolean>(false);

    const fetchMessage = async () => {
        setLoading(true);
        setError(null);

        try {
            const apiKey = import.meta.env.VITE_BASIC_API_KEY;
            console.log("Making API request...");

            const response = await fetch('https://0icko3anoi.execute-api.us-east-2.amazonaws.com/latest', {
                method: 'GET',
                headers: {
                    'x-api-key': apiKey || '',
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
            });

            console.log("Response received:", response.status);

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            console.log("Data received:", data);

            // Safely handle the response data
            if (typeof data === 'object') {
                setMessage(data.message || JSON.stringify(data));
            } else if (typeof data === 'string') {
                setMessage(data);
            } else {
                setMessage(JSON.stringify(data));
            }

            setIsDataFetched(true);
        } catch (err) {
            console.error("Fetch error:", err);
            setError(err instanceof Error ? err.message : 'An unknown error occurred');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="lambda-container">
            <h2>Lambda API Data</h2>

            <button
                onClick={fetchMessage}
                disabled={loading}
                className="fetch-button"
            >
                {loading ? 'Loading...' : 'Fetch Data from Lambda'}
            </button>

            {error && (
                <div className="error-message">
                    Error: {error}
                </div>
            )}

            {isDataFetched && !error && (
                <div className="lambda-response">
                    <h3>Response from Lambda:</h3>
                    <p>{message}</p>
                </div>
            )}
        </div>
    );
}

export default HelloLambda;