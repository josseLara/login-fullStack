import { Link } from 'react-router-dom';

function Login() {
     return ( 
          <main>
          <div className="main__imgLeft">
            <h1>Bienvenido de nuevo</h1>
          </div>
          <div className="main__form">
            <h1>Login</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
            {/* form */}
            <form action="#">
              <div className="form__input">
                  <label htmlFor="correo">Correo</label>
                  <input type="email" name="correo" id="correo" />
              </div>
              <div className="form__input">
                  <label htmlFor="pass">Contraseña</label>
                  <input type="password" name="pass" id="pass" />
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