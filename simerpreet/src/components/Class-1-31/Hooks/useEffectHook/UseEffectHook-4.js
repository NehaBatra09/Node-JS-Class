import React, { useCallback, useEffect } from "react";
import { useState } from "react";
export const UseEffectHook4 = () => {
    const [bankAccount, setBankAccount] = useState(100)
    const [studentAccount, setStudentAccount] = useState(4000)
    const [payment, setPayment] = useState(0)

    useEffect(() => {
        setStudentAccount((pre) => pre - parseInt(payment))
    }, [bankAccount])
    
    const handleSendPayment = () => {
        if (parseInt(payment) != 0) {
            setBankAccount(pre => pre + parseInt(payment))
        } else {
            alert("Your balance is 0")
        }
       
    }

    return (<>
        BankAccount:{bankAccount}<br />
        StudentAccount:{studentAccount}<br />
        <input type="text" onChange={(e) => setPayment(e.target.value)}></input><br />
        <button onClick={handleSendPayment}>Send Payment</button>
    </>)

}




