import React, {useState} from 'react';
import MjolGreenBlueButton from "../buttons/MjolGreenBlueButton";

const InputPriceModal = ({hidden, setVisible, onClick}) => {

    const [price, setPrice] = useState('')

    return (
        <div>
            {hidden
                ? <></>
                :
                <div className="z-40 fixed inset-0 bg-gray-600 bg-opacity-90 overflow-y-auto
                                                    h-full w-full grid place-items-center">
                    <div className="relative p-4 w-full max-w-md h-full md:h-auto">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <button type="button"
                                    className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                                    data-modal-toggle="popup-modal"
                                    onClick={() => setVisible(false)}
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                          clipRule="evenodd"/>
                                </svg>
                            </button>
                            <div className="p-6 text-center">

                                <h2 className="text-blue-700 font-extrabold text-3xl mb-10">
                                    Transfer NFT
                                </h2>

                                <div className="inline-flex">
                                    <input className="rounded-lg p-2 mb-10"
                                           type="text"
                                           placeholder="address: archway1x86..."
                                           value={price}
                                           onChange={e => setPrice(e.target.value)}
                                    />
                                    <div className="mt-2"></div>
                                </div>
                                <div></div>

                                <button data-modal-toggle="popup-modal" type="button"
                                        onClick={() => onClick(price)}
                                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                                    Send
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                //             <div className="fixed inset-0 bg-gray-600 bg-opacity-90 overflow-y-auto
                //                                h-full w-full grid place-items-center"
                //             >
                //                 <div className="w-1/2 grid grid-rows-2 gap-4 px-2 py-4 rounded-lg bg-mjol-white">
                //                     <input className="rounded-lg p-2"
                //                            type="number"
                //                            placeholder="Price you want your NFT to be sold"
                //                            value={price}
                //                            onChange={e => setPrice(e.target.value)}
                //                     />
                //                     <MjolGreenBlueButton onClick={() => onClick(price)}>
                //                         Sell
                //                     </MjolGreenBlueButton>
                //                     <MjolGreenBlueButton onClick={() => setVisible(false)}>
                //                         Close popup
                //                     </MjolGreenBlueButton>
                //                 </div>
                //             </div>
            }
        </div>
    );
};

export default InputPriceModal;