/**
 * Created by mumarm45 on 13/12/2018.
 */
import React from "react";

let List = (props) => {
    return (<div>
        <ul>
            {props.items.map(item => {
                return <li key={item.id}>
                            <span style={{textDecoration: item.complete ? 'line-through' : 'none'}}
                                  onClick={() => props.toggleItem && props.toggleItem(item)}>{item.name}</span>
                    <button onClick={() => props.removeItem(item)}>X</button>
                </li>
            })}
        </ul>
    </div>);
};
export default List;