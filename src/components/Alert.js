// @ts-nocheck 
import React from 'react';

import PropTypes from "prop-types";

function Alert(props:any ) {
    const capitalize = (word = "") => {
        if (!word) return ""; // Check agar word empty hai
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    };

    return (
        <div style={{ height: '50px' }}>
            {props.alert && (
                <div 
                    className={`alert alert-${props.alert.type} alert-dismissible fade show`} 
                    role="alert"
                >
                    <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
                </div>
            )}
        </div>
    );
}

export default Alert;

Alert.propTypes = {
    alert: PropTypes.shape({
        type: PropTypes.string,
        msg: PropTypes.string
    })
};
