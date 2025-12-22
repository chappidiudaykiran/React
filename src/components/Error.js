import React from 'react'
import { useRouteError } from 'react-router-dom';
const Error = () => {
    const error = useRouteError();
    console.error(error);
  return (
    <div>
        <h1>OOPS!!! Something went wrong.</h1>
        <h2>{error.status} {error.statusText}</h2>
    </div>
  )
}

export default Error;