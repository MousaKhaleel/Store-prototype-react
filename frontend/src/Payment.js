import React, { useState } from "react";

function Payment() {
    const [balance, setBalance] = useState(20);

    function handlePay() {
        setBalance(prevBalance => prevBalance - 5);
    }

    return (
        <div>
            <p>Your current balance is: {balance}</p>
            <button onClick={handlePay}>Payment</button>
        </div>
    );
}

export default Payment;