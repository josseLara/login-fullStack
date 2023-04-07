import { Link } from 'react-router-dom';

function SingUp() {
     return (
          <main>
               <div className="main__imgLeft">
                    <h1>Forma parte de nosotros</h1>
               </div>
               <div className="main__form">
                    <h1>Registrate</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                    {/* form */}
                    <form action="#">
                         <div className="form__input">
                              <label htmlFor="nombre">Nombre</label>
                              <input type="text" name="nombre" id="nombre" />
                         </div>
                         <div className="form__input">
                              <label htmlFor="correo">Correo</label>
                              <input type="email" name="correo" id="correo" />
                         </div>
                         <div className="form__input">
                              <label htmlFor="pass">Contraseña</label>
                              <input type="password" name="pass" id="pass" />
                         </div>
                         <div className="form__input">
                              <label htmlFor="passRepeat">Repita la contraseña</label>
                              <input type="password" name="passRepeat" id="passRepeat" />
                         </div>
                         {/* check */}
                         <div className="form__check">
                              <input type="checkbox" name="terminos" id="terminos" />
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