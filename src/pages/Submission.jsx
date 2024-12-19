import React from "react";
import { Link, useLocation } from "react-router-dom";
import utils from "@/lib/utils.js";
import Header from "@/components/Header";
function Submission() {
    const location = useLocation();
    const name = location.state.name || "Anonymous";
retun (
    <div className="min-h-screen w-ful bg-zince-50 px-4 py-2 md:px-8 md:py-4">
        <Header />
        <div className="rounded-lg bg-lime-500 p-3">
            <h2>Success</h2>
            <p className="text-bg">
                Name your from is succesfully submitted. Go to check {" "}
                <a href={utils.entriesUrl} className="text-bblue-600 underline"  target= "blank">here</a>
            </p>
        </div>
        
    </div>
);
}

export default Submission;
