import { useState } from 'react';

const Login = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [message, setMessage] = useState('');

   const handleSubmit = (e) => {
       e.preventDefault();
       if (!email || !password) {
           setMessage('Todos los campos son obligatorios.');
       } else if (password.length < 6) {
           setMessage('La contraseña debe tener al menos 6 caracteres.');
       } else {
           setMessage('Inicio de sesión exitoso.');
       }
   };

   return (
       <div className="container mt-5">
           <h2>Formulario de Login</h2>
           <form onSubmit={handleSubmit}>
               <div className="mb-3">
                   <label htmlFor="email" className="form-label">Email</label>
                   <input
                       type="email"
                       id="email"
                       className="form-control"
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}
                   />
               </div>
               <div className="mb-3">
                   <label htmlFor="password" className="form-label">Contraseña</label>
                   <input
                       type="password"
                       id="password"
                       className="form-control"
                       value={password}
                       onChange={(e) => setPassword(e.target.value)}
                   />
               </div>
               <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
           </form>
           {message && <p className="mt-3">{message}</p>}
       </div>
   );
};

export default Login;
