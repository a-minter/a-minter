import React from "react";

const SingleNumberLine = (props) => {
    return (
        <input
            type={props.type}
            name={props.id}
            id={props.id}
            className="peer focus:ring-indigo-500 focus:border-cyan-500 flex-1 block w-full rounded-none rounded-md sm:text-sm border-gray-300"
            placeholder={props.text}
            min={props.min}
            max={props.max}
            onChange={(e) => props.setState(e.target.value)}
        />
    );
};

export default SingleNumberLine;