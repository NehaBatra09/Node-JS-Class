import React from "react";
import PropTypes from "prop-types";
export const Temp = ({name}) => {


    return (<>Hello High Order Compoent {name}</>)

}

Temp.propTypes = {
    name: PropTypes.string
}
