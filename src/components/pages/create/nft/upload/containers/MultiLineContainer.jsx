import React from "react";

const MultiLineContainer = (props) => {
    return (
        <div className="grid grid-cols-3 gap-6">
            <div className="sm:col-span-2 col-span-3">

                <label className="block text-sm font-bold text-white">
                    {props.name}
                </label>
                <div className="mt-1">
                      <textarea
                          id={props.id}
                          name={props.id}
                          rows={props.rows}
                          className="shadow-sm focus:ring-indigo-500 focus:border-cyan-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                          placeholder="Brief description for your NFT"
                          defaultValue={''}
                          maxLength={props.maxLength}
                          onChange={(e) => props.setState(e.target.value)}
                      />
                </div>
            </div>
        </div>
    )
};

export default MultiLineContainer;