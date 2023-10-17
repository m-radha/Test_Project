import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StartButton from './components/StartButton';
import Form1 from './components/Form1';
import './css/App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartButton/>}/>
        <Route path='form1' element={<Form1/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
