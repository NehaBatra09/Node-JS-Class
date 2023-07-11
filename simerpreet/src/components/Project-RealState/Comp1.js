import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard, faAirFreshener } from '@fortawesome/free-solid-svg-icons'
export const Comp1 = () => {
    return (<>
        <div>
            <h3><FontAwesomeIcon icon={faAddressCard} color="blue" /> Font Awesome Address Icon</h3>
            <h3><FontAwesomeIcon icon={faAirFreshener} color="red" /> Font Awesome Solid Icon</h3>
        </div>
    </>)
}

//Follow this link for font awesome
// https://www.positronx.io/how-to-add-and-use-font-awesome-in-react-app/