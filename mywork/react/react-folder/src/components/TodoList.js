import React, { useEffect } from "react";
import  list  from "./data";
const TodoList = () => {
    return (
        <ul className="font-bold text-1xl mt-7 leading-10">
            {list.map((item) => ( 
                <li className="flex justify-between border mb-5">
                <span>
                    <input type="checkbox" name="sport" value={item.status} /> {item.name}
                </span>
                <button className="border rounded-full w-11 bg-orange-400 hover:bg-orange-300">X</button>
            </li>
            ))}
            {/* <li className="flex justify-between border mb-5">
                <span>
                    <input type="checkbox" name="sport" value="Bóng đá" /> Bóng đá
                </span>
                <button className="border rounded-full w-11 bg-orange-400 hover:bg-orange-300">X</button>
            </li>
            <li className="flex justify-between border mb-5">
                <span>
                    <input type="checkbox" name="sport" value="Bơi lội" /> Bơi lội
                </span>
                <button className="border rounded-full w-11 bg-orange-400 hover:bg-orange-300">X</button>
            </li>
            <li className="flex justify-between border">
                <span>
                    <input type="checkbox" name="sport" value="Điền kinh" /> Điền kinh
                </span>
                <button className="border rounded-full w-11 bg-orange-400 hover:bg-orange-300">X</button>
            </li> */}
        </ul>
    );
};

export default TodoList;