    import React, { Component } from 'react';
    import { createUser, signup } from '../../requests/user';
    import { Link, useNavigate } from 'react-router-dom';
    import isEmail from '../../../utils/isEmail'
    import maskCPF from '../../../utils/maskCPF'
    import TextMask from 'react-text-mask';
    import isValidCPF from '../../../utils/isValidCPF'

    import InputMask from "react-input-mask";
/*     import './SignUp.css' */
    interface Props {}
    interface State {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    cpf: string;
    phoneNumber: string;
    isLoading: boolean;
    errorMessage: string
    isCPFbeingEdited: boolean
    }

    class SignUp extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        cpf: '',
        phoneNumber: '',
        isLoading: false,
        errorMessage: '',
        isCPFbeingEdited: false
        };
    }
   
    handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        this.setState({ errorMessage: '' });
        const { name, email, password, confirmPassword,cpf, phoneNumber } = this.state;
        
        
        if (name === '' || email === '' || password === '' || cpf === '' || phoneNumber === ''){
            this.setState({ errorMessage: 'Preencha todos os campos' });
            this.setState({isLoading: false})
            return;
        }

        if(password !== confirmPassword){
            this.setState({ errorMessage: 'Campos de senha e confirmação de senha não são iguais' });
            this.setState({isLoading: false})
            return;
        }
        
        if (!isEmail(email)) {
            this.setState({ errorMessage: 'Email inválido' });
            this.setState({isLoading: false})
            return;
        }
        this.setState({ isLoading: true });

        if(!isValidCPF(cpf)){
            this.setState({ errorMessage: 'CPF inválido' });
            this.setState({isLoading: false})
            return;
        }
        try {
            const { name, email, password, cpf, phoneNumber } = this.state;
            createUser(name, email, cpf, phoneNumber, password)
            .then(()=>{
                alert("Usuário adicionado ao sistema")
                this.setState({
                name: '',
                email: '',
                password: '',
                cpf: '',
                phoneNumber: '',
                isLoading: false,
                });

            }).catch(() => {
                this.setState({ errorMessage: 'Usuário já cadastrado' });
                this.setState({ isLoading: false });
            })
        } catch (error) {
            console.error(error);
            this.setState({ errorMessage: 'Usuário já cadastrado' });
            this.setState({ isLoading: false });
        }
    };

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        if (name === 'cpf'){
            const maskedCPF = maskCPF(value)
            this.setState({cpf:maskedCPF });
        }
        this.setState({ [name]: value } as Pick<State, keyof State>);
    };
    render() {
        const {
        name,
        email,
        password,
        confirmPassword,
        cpf,
        phoneNumber,
        isLoading,
        errorMessage,
        isCPFbeingEdited
        } = this.state;
    
        return (
        <div>
            <h1>Cadastro de funcionário</h1>
            <form onSubmit={this.handleSubmit} noValidate>
            <label htmlFor="name">Nome:</label>
            <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={this.handleChange}
                required
            />
    
            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={this.handleChange}
                required
            />    
            <label htmlFor="password">Senha:</label>
            <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={this.handleChange}
                required
            />
    
            <label htmlFor="confirmPassword">Confirme a senha:</label>
            <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                onChange={this.handleChange}
                required
            />
    
            <label htmlFor="cpf">CPF:</label>
            <TextMask
            mask={[
              /\d/,
              /\d/,
              /\d/,
              '.',
              /\d/,
              /\d/,
              /\d/,
              '.',
              /\d/,
              /\d/,
              /\d/,
              '-',
              /\d/,
              /\d/
            ]}
            placeholder="___.___.___-__"
            id="cpf"
            type="text"
            name="cpf"
            value={cpf}
            onChange={this.handleChange}
            />
            <label htmlFor="phoneNumber">Telefone:</label>
            <InputMask
                mask="(99) 99999-9999"
                type="tel"
                name="phoneNumber"
                id="phoneNumber"
                value={phoneNumber}
                onChange={this.handleChange}
            />
            <button type="submit" disabled={isLoading}>
                {isLoading ? "Loading..." : "Sign Up"}
            </button>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            </form>
            <h4>JÁ TEM UMA CONTA? <Link to='/'>FAÇA LOGIN</Link></h4>
        </div>
        
        );
    }
    
    }

    export default SignUp;
