import React from "react";
import SingleCharLine from "../lines/SingleCharLine";
import SingleNumberLine from "../lines/SingleNumberLine";


const SingleLineContainer = (props) => {
    return (
        <div className="grid grid-cols-3 gap-6">
            <div className="sm:col-span-2 col-span-3">
                <label
                    className="block font-bold text-sm text-white">
                    {props.name}{props.required ? <b className="text-sm font-large text-red-500">*</b>:<></>}
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                    {props.type === 'text' ? (
                        <SingleCharLine name={props.name} text={props.text} type={props.type}
                                        minLength={props.minLength} maxLength={props.maxLength} id={props.id}
                                        setState={props.setState}
                        />
                    ) : (
                        <SingleNumberLine name={props.name} text={props.text} type={props.type} min={props.min}
                                          max={props.max} id={props.id} setState={props.setState}
                        />
                    )}
                </div>
            </div>
        </div>
    )
};

export default SingleLineContainer;