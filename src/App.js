import './App.css';
import Counter from './components/Counter'
import RegistrationForm from './components/RegistrationForm';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Layout from './components/Layout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>          
          <Route path="/" element={
            <Layout>
              <RegistrationForm/>
            </Layout>
          } />          
          <Route path="/counter" element={
            <Layout>
              <Counter />
            </Layout>
          } />
        </Routes>      
      </BrowserRouter>
    </div>
  );
}

export default App;
