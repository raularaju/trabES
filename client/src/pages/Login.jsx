import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div class="login">
      <div class="flex-container">
        <header>
          <h1 class="login-header">Gerência de Estoque</h1>
        </header>
        <div id="initial-view">
          <h3>Fazer Login</h3>
          <form class="login-form" action="login.php" method="POST">
            <div class="form-group">
              <label for="username">E-mail ou usuário</label>
              <input type="text" name="username" id="username" required />
            </div>
            <div class="restore-login">
              <a href="">Esqueceu seu e-mail?</a>
            </div>
            <div class="form-group">
              <label for="password">Senha</label>
              <input type="password" name="password" id="password" required />
            </div>
            <div class="restore-login">
              <a href="">Esqueceu sua senha?</a>
            </div>
            <div class="form-group">
              <button type="submit">Login</button>
            </div>
          </form>
          <div class="ask-acess">
            <Link to="/signup">Ainda não tem acesso?</Link>
            <Link to="/products">Teste</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
