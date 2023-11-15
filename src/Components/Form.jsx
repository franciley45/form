
import { useState } from 'react'
import Swal from 'sweetalert2';
import './Form.css'
import { useNavigate } from 'react-router-dom';

const stateInicial = {
  name: '',
  email: '',
  rua: '',
  bairro: '',
}

function Form() {
  const [state, setState] = useState(stateInicial);

  const totalCounter = () => {
    let counter = 0;
    const percentage = 25

    state.name ? counter += percentage : null
    state.email ? counter += percentage : null
    state.rua ? counter += percentage : null
    state.bairro ? counter += percentage : null

    return counter
  }
  
  const hendleChange = ({ target }) => {
    const { name, value } = target;
    setState((prev) => ({ ...prev, [name]: value }))

  }

  const navigate = useNavigate();
  const handleClick1 = () => navigate('/Home');

  const handleSubmit = (e) => {
    setState(stateInicial)

    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })

    Toast.fire({
      icon: 'success',
      title: 'Signed in successfully'
    })
    e.preventDefault()
    handleClick1()
  }


  return (
    <>
      {/* <button onClick={handleClick1}>test</button> */}
      <div className='box'>
        <h2>Processo do Formulário</h2>
        <div className='barraBox'>
          <h3 style={{ width: `${totalCounter()}%` }}></h3>
        </div>
        <form action='' onSubmit={handleSubmit}>
          <div className='inputBox'>
            <input
              type='text'
              name="name"
              value={state.name}
              onChange={hendleChange}
              required></input>
            <label htmlFor="">Nome Completo</label>
          </div>
          <div className='inputBox'>
            <input
              type='text'
              name="email"
              value={state.email}
              onChange={hendleChange}
              required></input>
            <label htmlFor="">E-mail</label>
          </div>
          <div className='inputBox'>
            <input
              type='text'
              name="rua"
              value={state.rua}
              onChange={hendleChange}
              required></input>
            <label htmlFor="">Rua</label>
          </div>
          <div className='inputBox'>
            <input
              type='text'
              name="bairro"
              value={state.bairro}
              onChange={hendleChange}
              required></input>
            <label htmlFor="">Bairro</label>
          </div>
          <input type='submit' value='Envia'></input>
        </form>
      </div>
    </>
  )
}

export default Form;