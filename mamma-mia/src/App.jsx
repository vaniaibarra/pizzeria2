import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';

const App = () => {
   // Estado para alternar entre vistas
   const [view, setView] = useState('home'); // Puede ser 'home', 'register', 'login'

   return (
       <div
       style={{
        width: '100vw'
       }}
       >
           {/* Navbar siempre visible */}
           <Navbar />
           
           {/* Contenido dinámico */}
           <main className="container mt-4">
               {view === 'home' && <Home />}
               {view === 'register' && <Register />}
               {view === 'login' && <Login />}
           </main>

           {/* Botones para cambiar entre vistas (opcional, para pruebas) */}
           <div className="text-center mt-3">
               <button
                   className="btn btn-outline-primary m-2"
                   onClick={() => setView('home')}
               >
                   Ir a Home
               </button>
               <button
                   className="btn btn-outline-success m-2"
                   onClick={() => setView('register')}
               >
                   Ir a Registro
               </button>
               <button
                   className="btn btn-outline-warning m-2"
                   onClick={() => setView('login')}
               >
                   Ir a Login
               </button>
           </div>

           {/* Footer siempre visible */}
           <Footer />
       </div>
   );
};

export default App;
