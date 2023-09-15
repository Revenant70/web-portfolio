import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faToggleOff, faToggleOn } from "@fortawesome/free-solid-svg-icons"



function Footer() {

    const [icons, setIcons] = useState(faToggleOff);

    return (
        <>
            <div className="fixed left-0 bottom-0 flex flex-row w-screen">
                <div className="basis-1/3 flex justify-start pl-7 pb-7 text-5xl font-secondary">JM</div>
                <div className="basis-1/3 flex justify-center">
                    <button onClick={()=>{
                        setIcons(icons === faToggleOn ? faToggleOff : faToggleOn);
                    }}>
                        <FontAwesomeIcon icon={icons} size={"xl"}></FontAwesomeIcon>
                    </button>
                </div>
                <div className="basis-1/3 flex justify-center"></div>
            </div>
        </>
    )
}

export default Footer