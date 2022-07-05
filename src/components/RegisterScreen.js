import React from 'react';
import Swal from 'sweetalert2';
import { useForm } from '../hooks/useForm';
import image from "../anubis-academy.png";


export const RegisterScreen = () => {
    
    const [ formValues, handleInputChange, reset ] = useForm({
        name: '',
        email: ''
    });

    const { name, email } = formValues;

    
    const handleSubmit =  (e) => {
        e.preventDefault();
        if( name === '' || email === ''){
            Swal.fire('Error', 'Los campos son obligatorios');
        }

        fetch( `http://localhost:5000/api/users/register`, {
            method: 'post',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify( {"name": name, "email": email} )
        
        }).then(res => res.json())
        reset()
    }

    return (
        <div className='rowS'>
            <div className='columnS register__center' >
                <div className='register__center'>
                    <span className='register__title'>PREINSCRIBETE</span><br/>
                    <span className='register__title'>- AQUÍ -</span><br/>
                </div>
                <div className='spacing__top'>
                    <span className='register__subtitle register__center style_subtitle'>RECIBE</span><br/>
                    <div className='register__center'>
                        <span className='white__span'>- CURSO INTRODUCTORIO GRATIS -</span><br/>
                        <span className='orange__span'>INVIERTE EN CRIPTOMONEDAS</span><br/>
                    </div>
                    <div className='spacing_topS'>
                        <span className='white__span'>- 25% OFF EN EL CURSO QUE ELIJAS -</span><br/>
                    </div>
                </div>

                <div className='register__center form__center'>
                    <form
                        onSubmit={handleSubmit}
                    
                    >
                        <span className='white__form'>NOMBRE Y APELLIDO</span><br/>
                        <input name='name' type="text"  className='auth__input' value={ name } onChange = {handleInputChange}/>
                        <br/><span className='white__form'>CORREO ELECTRÓNICO</span><br/>
                        <input name='email' type="text"  className='auth__input' value={ email } onChange = {handleInputChange}/>
                    </form>
                    <div className='spacing_button'>
                        <button type='submit' className='button__style' onClick={ handleSubmit }>
                            Registrar
                        </button>
                    </div>
                </div>
                
            </div>

            <div className='rightS'>
                <img src= {image} className="image"/>
            </div>
        </div>
    )

}