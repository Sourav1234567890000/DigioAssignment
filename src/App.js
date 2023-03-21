import './App.css';
import { Routes, Route } from 'react-router-dom';
import AdharValidation from './component/AdharValidation';
import EmailValidation from './component/EmailValidation';
import OtpValidation from './component/OtpValidation';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='*' element={<EmailValidation/>}/>
        <Route path='/adhar' element={<AdharValidation/>}/>
        <Route path='/otp' element={<OtpValidation/>}/>
      </Routes>
      {/* <EmailValidation/> */}
       {/* <AdharValidation/> */}
       {/* <OtpValidation/>   */}
    </div>
  );
}

export default App;
