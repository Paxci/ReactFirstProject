import React, { Component } from 'react';
import useForm from "react-hook-form"
import image from './image/pexels-fauxels-3183165.jpg';
import './form.css'


class Form extends Component{

    render(){
        return(
            <section>
                <div className="imgBx">
                    <img src={image}/>
                </div>
                <div className="contentBx">
                    <div className="formBx">
                    <h2>Login</h2>
                        <form action="">
                            <div className="inputBx">
                                <span>Nombre Completo</span>
                                <input type="text" name="Name"/>
                            </div>
                            <div className="inputBx">
                                <span>Email</span>
                                <input type="Email" name="Email"/>
                            </div>
                            <div className="inputBx">
                                <span>Celular</span>
                                <input type="tel" name="Cel"/>
                            </div>
                            <div className="inputBx">
                                <span>Edad</span>
                                <input type="number" name="Edad" min="18" max="100"/>
                            </div>
                            <div className="remember">
                                <label><input type="checkbox"/> Remember me</label>
                            </div>
                            <div className="inputBx">
                                <input type="submit" value="Sign in" name=""/>
                            </div>
                            <div className="inputBx">
                                <p>Dont have an account? <a href='#'>Sign up</a></p>
                            </div>
                        </form>
                        <h3>Login with social media</h3>
                        <ul class="sci">
                            <li><a href="#"><i className="fab fa-facebook-f" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fab fa-twitter" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fab fa-instagram" aria-hidden="true"></i></a></li>
                        </ul>
                    </div>
                </div>
            </section>
        )
    }
}

export default Form