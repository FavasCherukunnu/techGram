import './App.css';
import HomeTemplate from './components/homeTemplate';
import { HomePage } from './pages/homePage/homePage';
import { RouterHandler } from './pages/router/routerHanler';
import SignupPage from './pages/signup/signup';

function App() {
  return (
    <div>
      <RouterHandler/>
    </div>
  );
}

export default App;
