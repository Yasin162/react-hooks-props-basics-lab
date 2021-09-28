import React from "react";

const Links = (props) => {
    return (
        <div>
        <h3>Links 
        <a href="{github}">{props.github}</a> 
        <a href="{linkedin}">{props.linkedin}</a>
        </h3>
        </div>
    );
}
export default Links;