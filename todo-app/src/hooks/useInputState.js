import { useState } from "react";
/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default initialVal => {
    const [value, setValue] = useState(initialVal);
    const handleChange = e => {
        setValue(e.target.value);
    };
    const reset = () => {
        setValue("");
    };
    return [value, handleChange, reset];
}