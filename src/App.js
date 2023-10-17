import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StartButton from './components/StartButton';
import Form from './components/Form';
import Form1 from './components/Form1';

function App() {
  return (
    <div className="App">
      <h1>App Comp</h1>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartButton/>}/>
        <Route path="form" element={<Form/>}/>
        <Route path='form1' element={<Form1/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
