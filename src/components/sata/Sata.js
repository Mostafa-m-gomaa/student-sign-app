import React from "react";
import './sata.css'

const sata =(props)=>{
    const items =props.data;
    const deleteItem=props.deleteItem
    const length=items.length;
    const showItems =length ?(
        items.map(i=>{
            return (
                <div className="data"  key={i.id}>
                   <span>{i.name}</span>
                   <span>{i.age}</span>
                   <span className="x" onClick={()=>deleteItem(i.id)}> x </span>
                </div>
            )
        })
    ):
    (
        <p className="no-p"> there is no items to show </p>
    )
    return (
        <div className="sata-father">
            <div className="table-head">
                <span>name</span>
                <span>age</span>
                <span>action</span>
            </div>
            <div>{showItems}</div>
        
        </div>
    )
}
export default sata ;