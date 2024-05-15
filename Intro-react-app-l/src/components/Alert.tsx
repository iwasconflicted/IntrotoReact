import { useState } from 'react';

interface AlertProps {
    children: string
}

const Alert = ({children}:AlertProps) => {

  const [show, setShow] = useState (false);

  const showAlert = () => setShow(true);
  const hideAlert = () => setShow(false);

  return (

    <>
    
    <button className="btn btn-success" onClick={showAlert}>Show</button>

    {show && 
    (<div className="alert alert-warning alert-dismissible fade show" role="alert">
          {children}
          <button className="btn-close" onClick={hideAlert}></button>
        </div>
    )}


    </>

  )
}

export default Alert

