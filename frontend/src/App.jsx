import {BrowserRouter as Router} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
function App() {
  return (
      <Router>
        <AnimatePresence mode='wait'>
          <Home />
        </AnimatePresence>
      </Router>
  );
}

export default App
