import React from 'react'
import {useState} from "react"

import DropDown from '../components/buttons/DropDown';
function ComponentCreator() {
    const [selectedValue, setSelectedValue] = useState("");
    
  return (
    
        <div>
            <DropDown name={"drop-1"} items={["item-1","item-2"]} setSelectedValue={setSelectedValue} selectedValue={selectedValue}/>
        </div>
  )
}

export default ComponentCreator