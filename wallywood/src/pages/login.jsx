import LoginComponent from './logincomponent.jsx';
import Signup from './signup.jsx';
import { useState } from 'react';
const Login = () => {

const [isLoginTrue, setIsLoginTrue] = useState(true);

if(isLoginTrue)
return(
<>
<LoginComponent/>
 <button onClick={() => setIsLoginTrue(false)}>Ny Bruger</button>
 </>
);
 else
 return(
   <>
  <Signup/>
  <button onClick={() => setIsLoginTrue(true)}>Allerede bruger?</button>
    </>
  );



};


export default Login;