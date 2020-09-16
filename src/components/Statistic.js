import React from "react";

function Statistic(props) {
    return (
        <div className="grid grid-cols-2 gap-4">
            <div>
                <img src={props.icon_path}/>
            </div>
            <div className={"grid grid-cols-1 gap-4"}>
                <div>{props.stat_name}</div>
                <div>{props.stat_number}</div>
            </div>
        </div>
    );
}

export default Statistic;
