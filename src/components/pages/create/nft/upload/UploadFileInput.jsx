import React from "react";

const UploadMediaIcon = () => {
    return (
        <svg
            className="mx-auto h-24 w-24 text-gray-400"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 48 48"
            aria-hidden="true"
        >
            <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

const UploadFileInput = (props) => {
    return (
        <div>
            <label className="block text-sm font-bold text-white">
                Upload artwork file<b className="text-sm font-large text-red-500">*</b>
            </label>
            {props.state === null ? (
                    <div className="bg-white p-2 relative border-2 border-gray-300 border-dashed w-full h-full inherit-border-radius">
                        <div className="space-y-1 text-center flex flex-col items-center justify-center h-full w-full">
                            <div className="flex text-sm text-gray-600">
                                <label className="mx-auto cursor-pointer bg-white rounded-md font-medium
                                             text-blue-500 hover:text-indigo-500
                                             focus:outline-none
                                             focus-visible:ring-0"
                                >
                                    <UploadMediaIcon/>
                                    Upload image
                                    <input id="file-upload" name="file-upload" type="file" accept="image/gif, image/jpeg, image/png"
                                           className="sr-only" onChange={(e) => props.setState(e.target.files[0])}/>
                                    <p className="text-xs text-gray-500">
                                        PNG, JPG, GIF up to 10MB
                                    </p>
                                </label>
                            </div>
                        </div>
                    </div>

            ):(
                <div className="flex justify-start mt-1 px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="relative">
                    <img width="100px" src={URL.createObjectURL(props.state)} alt="nft image"/>
                    <button className="absolute top-0 right-0 -mx-2 -my-2 bg-gray-900 text-white rounded-full hover:bg-gray-500 cursor-pointer"
                            onClick={() => props.setState(null)}>
                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor" aria-hidden="true">
                            <path d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    </button>
                    </div>
                </div>

            )}
        </div>
    )
};

export default UploadFileInput;