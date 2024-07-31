import Header from './components/Header.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';

function App() {
  return (
    <div className='my-10'>
      <Header />
      <main className='flex justify-center min-w-full'>
        <Signup />
      </main>
    </div>
  );
}

export default App;
