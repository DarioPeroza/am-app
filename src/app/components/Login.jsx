import React from "react";

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            identifier: "",
            password: "",
            verifiedPassword: "",
            signin: true,
            hidePassword: true
        }
    }
    componentDidMount() {
        const {signin} = this.state
        document.title = signin? "Inicio de sesión": "Registro";
    }
    hidePassword(length = Number) {
        let string = ""
        for (let i = 0; i < length; i++) {
            string += "*"
        }
        return string
    }
    changeValue(e) {
        const {name, value} = e.target
        const oldValue = this.state[name]
        let newValue = oldValue
        if (oldValue.length < value.length) {
            newValue += value.substr(oldValue.length, value.length)
        } else {
            newValue = newValue.substr(0, value.length)
        }
        this.setState({[name]: newValue})
    }
    swichtSignin() {
        const {signin} = this.state
        document.title = !signin? "Inicio de sesión": "Registro";
        this.setState({signin: !signin})
    }
    swichtHidePassword() {
        this.setState({hidePassword: !this.state.hidePassword})
    }
    login(e) {
        e.preventDefault()
        fetch('login', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
    }
    showInput(name, labelContent, type = "string") {
        const {hidePassword} = this.state
        const element = this.state[name]
        const value = element;
        const hideValue = this.hidePassword(value.length)
        return (
            <>
            <label htmlFor={name}>{labelContent}</label>
            <input 
                type={hidePassword? type: "string"}
                name={name}
                required
                onChange={e => this.changeValue(e)} 
                value={type === "password" && hidePassword? hideValue: value} />
            </>
        )
    }
    render() {
        const {signin, hidePassword} = this.state
        return (
            <form onSubmit={e => this.login(e)} className={signin? "signin-form": "signup-form"}>
                <h1>{signin? "Inicia sesión": "Regístrate"}</h1>
                {this.showInput("identifier", "Correo o número de teléfono")}
                {this.showInput("password", "Clave", "password")}
                {signin? null: this.showInput("verifiedPassword", "Verifica la clave", "password")}
                <a 
                    href="#" 
                    onClick={() => this.swichtSignin()}>
                    Quiero {signin? "registrarme": "iniciar sesión"}
                </a>
                <button type="submit">{signin? "Iniciar sesión": "Registrarme"}</button>
                <button type="button" onClick={() => this.swichtHidePassword()}>{hidePassword? "O": "-"}</button>
            </form>
        )
    }
}

export default Login