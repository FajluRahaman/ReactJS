import { useState } from "react";
function Message() {
    const [message, setMessage] = useState('Hello');

    const changeMessage = () => {
        setMessage('Welcome to React Hook in js')
    }
  return (
    <div>
        <h2>{message}</h2>
        <button onClick={changeMessage}>Click Me</button>
    </div>
  )
}

export default Message;