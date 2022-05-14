const SingleCharLine = (props) => {
    return (
        <input
            type={props.type}
            name={props.id}
            id={props.id}
            className="focus:border-cyan-500 flex-1 block w-full rounded-none rounded-md sm:text-sm border-gray-300"
            placeholder={props.text}
            minLength={props.minLength}
            maxLength={props.maxLength}
            onChange={(e) => props.setState(e.target.value)}
        />
    );
};

export default SingleCharLine;