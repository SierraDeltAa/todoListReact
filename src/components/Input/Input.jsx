import React, {useState} from "react"

export default function Input(props){

    

    return(
        <div className="card-footer text-center">
            <div className="btn-group">
                <button className="btn btn-dark btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Add a task
                </button>
                <div className="dropdown-menu p-2 bg-dark">
                    <div className="d-flex">
                        <input type="text" className="rounded border" placeholder="new task" onChange={props.onChange} />
                        <button className="btn btn-sm btn-success mx-3" onClick={props.onSubmit} >Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}