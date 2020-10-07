import React from 'react';

const FooterBlock=props=> {
    const marg = props.mrg && {width:'100%',height:'20px',marginTop:'auto', backgroundColor:'green'}
    return <div style={marg}>
        <p style = {{width:"fit-content", margin:"0",marginLeft: "auto", marginRight:"10px"}}>{props.cop}</p>
    </div>
}
export  default FooterBlock