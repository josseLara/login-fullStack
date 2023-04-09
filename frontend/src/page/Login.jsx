import { Link, useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import axios from 'axios';

function Login() {
  const correoRef = useRef(null);
  const passRef = useRef(null);
  const navigate = useNavigate();

  const handleAccess = async (e)=>{
    e.preventDefault();
     // Crea un nuevo objeto FormData
     const data = { 
      correo: correoRef.current.value,
      pass:  passRef.current.value 
     }
     try{
       let status = await axios.post('http://localhost:3000/authorization',data);
       navigate("/home")
      }catch(err){
        console.error(err);
      }
  }
  
  console.log(status);

  return ( 
    <main>
      <div className="main__imgLeft">
        <h1>Bienvenido de nuevo</h1>
      </div>
      <div className="main__form">
        <h1>Login</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
        {/* form */}
        <form action="#" onSubmit={handleAccess}>
          <div className="form__input">
              <label htmlFor="correo">Correo</label>
              <input type="email" name="correo" id="correo" ref={correoRef} />
          </div>
          <div className="form__input">
              <label htmlFor="pass">Contraseña</label>
              <input type="password" name="pass" id="pass" ref={passRef}/>
          </div>
          {/* check */}
          <div className="form__check">
            <input type="checkbox" name="terminos" id="terminos" />
            <label htmlFor="terminos">Acepta los terminos</label>
          </div>
          <button type='submit'>Iniciar sesión</button>
        </form>
        <p>nuevo Usuario? <Link to="/signUp">Registrarme</Link></p>
      </div>
    </main>
  );
}

export default Login;
