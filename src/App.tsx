import Home from './pages/Home';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';

const App = () => {

  return <>
    <Navbar/>

    <main className={
        "container text-main-text mx-auto min-h-screen lg:max-w-4xl " +
        "px-2 lg:px-0 pt-16 lg:pt-24"
      }
    >
      <Routes>

        <Route path="/" element={
          <Home/>
        }/>

        <Route path="/:uuid" element={
          <Profile/>
        }/>

        <Route path="/*" element={
          <NotFound/>
        }/>

      </Routes>
    </main>
  </>;
}

export default App;
