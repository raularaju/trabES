import React from 'react';
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div class="signup">
      <div id="flex-container">
        <div id="initial-view">
          <h3>Crie uma conta para acessar o estoque</h3>
          <form class="login-form" action="login.php" method="POST">
            <div class="first-column">
              <div class="form-group">
                <label for="nome">Nome Completo</label>
                <input name="nome" id="nome" required />
              </div>
              <div class="form-group">
                <label for="cpf">CPF</label>
                <input name="cpf" id="cpf" required />
              </div>
              <div class="form-group">
                <label for="telefone">Telefone</label>
                <input name="telefone" id="telefone" required />
              </div>
            </div>
            <div class="second-column">
              <div class="form-group">
                <label for="email">E-mail</label>
                <input name="email" id="email" required />
              </div>
              <div class="form-group">
                <label for="password">Senha</label>
                <input type="password" name="password" id="password" required />
              </div>
              <div class="form-group">
                <label for="confirm-password">Confirmar Senha</label>
                <input
                  type="password"
                  name="confirm-password"
                  id="confirm-password"
                  required
                />
              </div>
            </div>
            <div class="form-group">
              <button type="submit">Confirmar</button>
            </div>
          </form>
          <div class="login">
            <Link to='/'>Já tem uma conta?</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
