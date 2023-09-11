import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function usePage() {

    const navigate = useNavigate()

    const [activeClass, setActiveClass] = useState(0);
    const [isAcctive, setIsAcctive] = useState(false)


    const handleItemClick = (idx, route) => {
        setActiveClass(idx)
        if (idx === 4) {
            setIsAcctive(true)
        } else setIsAcctive(false)

        navigate(route)
    }
    return {
        activeClass,
        isAcctive,
        handleItemClick

    }
}