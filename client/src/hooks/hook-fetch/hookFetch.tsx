import { useState, useCallback, useEffect } from 'react';
import axios from 'axios';

const HookFetch = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [response, setResponse] = useState<any>(null);
    const [error, setError] = useState<string>("");
    const [options, setOptions] = useState({});
    const [url, setUrl] = useState<string>("");
    
    const doFetch = useCallback((url, options = {}) => {
        setResponse(null)
        setOptions(options);
        setIsLoading(true);
        setUrl(url);
      }, []);

      useEffect(() => {
        if (!isLoading) return;

        const requestOptions = {
            ...options,
            ...{
                headers: {
                  authorization: localStorage.getItem('token') ??  ""
                }
              }
        }

        const makeReq = async () => {
          await axios(url, requestOptions)
          .then(res => {
              setIsLoading(false);
              setResponse(res.data);
          })
          .catch(error => {
              if(error && error.response) {
                const msg = error.response.data.message ? error.response.data.message : error.response.data
                setError(msg);
                setIsLoading(false);
              }
          });
        }

        makeReq();

    }, [isLoading, url, options]);

    const clearError = useCallback(() => setError(''), []);

    return { isLoading, response, error, doFetch, clearError };
}

export default HookFetch;