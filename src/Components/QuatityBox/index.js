import Button from "@mui/material/Button";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { useState } from "react";

const QuantityBox = () => {
    const [inputVal, setInputVal] = useState(1);

    const minus = () => {
        if (inputVal > 1) {
            setInputVal(inputVal - 1);
        }
    };

    const plus = () => {
        setInputVal(inputVal + 1);
    };

    const handleInputChange = (event) => {
        const value = parseInt(event.target.value, 10);
        if (!isNaN(value) && value > 0) {
            setInputVal(value);
        }
    };

    return (
        <div className="quantityDrop d-flex align-items-center">
            <Button onClick={minus}><FaMinus /></Button>
            <input type="text" value={inputVal} onChange={handleInputChange} />
            <Button onClick={plus}><FaPlus /></Button>
        </div>
    );
};

export default QuantityBox;
