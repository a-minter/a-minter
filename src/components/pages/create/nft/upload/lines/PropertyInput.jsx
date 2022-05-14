const PropertyInput = (props) => {
    return (
        <div className="col-span-6 sm:col-span-3">
            <label className="text-sm font-medium text-white">
                {props.name}
            </label>
            <input
                type={props.type}
                name={props.id}
                id={props.id}
                maxLength={props.maxLength}
                className="mt-1 focus:ring-indigo-500 focus:border-cyan-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
        </div>
    )
};

export default PropertyInput;