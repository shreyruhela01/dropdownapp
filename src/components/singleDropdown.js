import React, {useState} from "react";
import Select from "react-select";

// import FilterFunc from './FilterFunc';

function Multidropdown () 
{
    var USERS= [
    {
        value: 1,
        label: "LINUX"
    },
    {
        value: 2,
        label: "Windows"
    },
    {
        value: 3,
        label: "IOS"
    },
    {
        value: 4,
        label: "Android"
    },
    {
        value: 5,
        label: "Windows 2000 Server"
    },
    {
        value: 6,
        label: "Unix"
    },
];

var [Displayvalue, getvalue] = useState()
var Multihandle = (e) => 
{
    getvalue(Array.isArray(e)?e.map(x=> x.label):[]);
}
    return (
        <div> 
            <Select isMulti options={USERS} onChange={Multihandle}> </Select>
            <center>
                <b> The Selected OS Names : </b><h3 style={{color: "rgb(162, 145, 124"}}> {Displayvalue + "  " } </h3>
            </center>
        </div> 
    )
}

export default Multidropdown;