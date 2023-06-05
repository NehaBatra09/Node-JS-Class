import React from "react"
import PropTypes from "prop-types"
export class ClassPropValidation extends React.Component {
    render() {

        return (<>name: {this.props.name}</>)
    }
}
ClassPropValidation.propTypes = {

    name: PropTypes.string.isRequired

}


export const FunPropValidation = ({ isAdmin, age }) => {
    console.log(isAdmin)
    return (<>{isAdmin} {age}</>)
}
// FunPropValidation.defaultProps = {
//     isAdmin: false,
//   };
// FunPropValidation.propTypes = {
//     user: PropTypes.shape({
//         name: PropTypes.string.isRequired,
//         age: PropTypes.number.isRequired,
//       }).isRequired,
//     name: PropTypes.string.isRequired,
//     productList:PropTypes.array.isRequired,
//     address:PropTypes.object.isRequired,
//     isAdmin:PropTypes.bool.isRequired,
//     color: PropTypes.oneOf(['red', 'blue', 'green']).isRequired,

// }
FunPropValidation.propTypes = {

    isAdmin: function (props, propName, componentName) {


        if (props[propName] !== 'admin') {
            return new Error(
                `Invalid value '${props[propName]}' supplied to ${componentName}. Required value: 'isAdmin'`
            );

        }
    },
    age: function (props, propName, componentName) {

        if (parseInt(props[propName]) < 18) {
            return new Error(
                `Invalid age '${props[propName]}' supplied to ${componentName}. Required value: 'age'`
            );

        }
    }

}