import React from "react";

const Form = () => {
    return (
        <div className="font-bold text-1xl mt-10">
            <input type="text" placeholder="Add Todo..." className="border w-72 h-10"/>
            <button className="border bg-emerald-400 w-20 h-11 hover:bg-sky-700" type="submit">
                SUBMIT
            </button>
        </div>
    );
};

export default Form;