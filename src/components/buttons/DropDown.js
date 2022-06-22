import React, { useEffect } from 'react'
import {useState} from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function DropDown(props) {
    const [dropDownState, setDropDownState] = useState(false);
    const handleClick = (e) => {
        props.setSelectedValue(e.target.value)
        setDropDownState(false)
    }
    useEffect(() => {console.log(props.selectedValue)},[props.selectedValue])
  return (
    <div >
        dropdown menu
        <div className='flex flex-col justify-center w-48 border rounded-xl'>
            <button className=" px-2 rounded-full h-auto flex justify-center align-center outline-none hover:shadow-md focus:shadow-none" onClick={(e) => {setDropDownState((val) => !val);  }}>{props.selectedValue ? props.selectedValue : props.name}<ArrowDropDownIcon/></button>
            {dropDownState && props.items.map((item,index) => <div className='flex mt-2 justify-center'>
                <button className="outline-none font-semibold border-b px-2 hover:shadow-lg hover:rounded-xl" onClick={handleClick} key={index} value={item}>{item}</button>
            </div>)}
        </div>
    </div>)
}

export default DropDown