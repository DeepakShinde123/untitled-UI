import React from 'react'
import { useLocation,Link } from 'react-router-dom';

function Error() {
  return (
    <div className="min-h-screen w-ful bg-zince-50 px-4 py-2 md:px-8 md:py-4">
        <Header />
        <div className="rounded-lg bg-red-500 p-3">
        <h2 className="text-3xl">Error</h2>
        <p>your from is flagged for badword</p>
        <p className="lg">
        Try sbmitting the form
        <Link to="/" className="text-blue-600 underline">here</Link>
        target="_blank"
        </p>
        </div>
        <button
        onClick={() => {
         Navigate("/submission",{
            state:{
                data:"Submitted"
            }
        });
    }}
        >
     </button>
    </div>
);
}

export default Error;