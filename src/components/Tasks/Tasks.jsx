import React, {useState} from "react"

export default function Tasks(props){
    return(
        <div className="card-body mb-5">
            <h5 className="card-title">Your tasks</h5>
            <div className="card-text" >
                {props.onShow}
            </div>
        </div>
    )
}