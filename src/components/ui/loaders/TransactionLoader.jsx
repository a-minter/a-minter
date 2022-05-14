import Lottie from "react-lottie-player";
import lottieJson from "../../../resources/loading.json";
import React from "react";

const TransactionLoader = (props) => {
    return (
        <div>
            <div className="pt-20 h-screen flex bg-black justify-center">
                <div className="my-auto">
                    <Lottie
                        loop
                        animationData={lottieJson}
                        play
                        style={{width: 200, height: 200}}
                    />
                </div>
            </div>
        </div>
    )
}

export default TransactionLoader;