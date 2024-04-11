import React from "react";
import ActionButton from "../../common/ActionButton";

export default function HomePage() {
    return (
        <div className="h-screen">
            <div className="flex flex-col justify-center items-center h-full">
                <div className={"my-2"}>
                    <h1 className="text-2xl font-bold text-center my-2">React Biliklərini yoxla!</h1>
                </div>
                <div>
                    <img src="https://oyren-dev-static-public.s3.eu-central-1.amazonaws.com/react-bootcamp-logo.png"
                         alt="Oyren.dev Logo"
                         className="w-40"/>

                </div>
                <div>
                    <ActionButton text="Testlərə başla!"/>
                </div>
            </div>
        </div>
    );
}