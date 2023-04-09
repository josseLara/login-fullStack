import axios from 'axios';
import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function SingUp() {
     const nameRef = useRef(null);
     const correoRef = useRef(null);
     const passRef = useRef(null);
     const passRepit = useRef(null);
     const navigate = useNavigate();


     const handleAccess = async (e) => {
          e.preventDefault();
          // Crea un nuevo objeto FormData
          const data = {
               nombre: nameRef.current.value,
               correo: correoRef.current.value,
               pass: passRef.current.value,
               passRepit: passRepit.current.value
          }
          try {
               let status = await axios.post('http://localhost:3000/authorization/add', data); 
               navigate('/home')
               
          } catch (err) {
               console.error(err);
          }
     }

     return (
          <main>
               <div className="main__imgLeft">
                    <h1>Forma parte de nosotros</h1>
               </div>
               <div className="main__form">
                    <h1>Registrate</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                    {/* form */}
                    <form action="#" method='post' onSubmit={handleAccess}>
                         <div className="form__input">
                              <label htmlFor="nombre">Nombre</label>
                              <input type="text" name="nombre" id="nombre" ref={nameRef} />
                         </div>
                         <div className="form__input">
                              <label htmlFor="correo">Correo</label>
                              <input type="email" name="correo" id="correo" ref={correoRef} />
                         </div>
                         <div className="form__input">
                              <label htmlFor="pass">Contraseña</label>
                              <input type="password" name="pass" id="pass" ref={passRef} />
                         </div>
                         <div className="form__input">
                              <label htmlFor="passRepeat">Repita la contraseña</label>
                              <input type="password" name="passRepeat" id="passRepeat" ref={passRepit} />
                         </div>
                         {/* check */}
                         <div className="form__check">
                              <input type="checkbox" name="terminos" id="terminos" required={true} />
                              <label htmlFor="terminos">Acepta los terminos</label>
                         </div>
                         <button type='submit'>Iniciar sesión</button>
                    </form>
                    <p>Estoy registrado <Link to="/">Iniciar sección</Link></p>
               </div>
          </main>
     );
}

export default SingUp;