import React from "react";
import Props_Exp_child from './Props_EXP_child';

function Props_Exp_parent(){
    return(<>
    <p>Parent Component</p>
    <Props_Exp_child name="Adi" email="myEmail"/>
    </>)
};
export default Props_Exp_parent;
