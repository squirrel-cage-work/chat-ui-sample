import './App.css'
// load amplify sdk
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import './amplifyConfig'
// load custom module
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// load custom component
import { Home } from './components/Home/Home';

function App() {

  return (
    <Router>
      <Routes>
          <Route
            path="/"
            element={
              <Authenticator loginMechanism={['email']} hideSignUp>
                  {({ user, signOut}) => <Home user={user} signOut={signOut} />}
              </Authenticator>
            } 
          />
      </Routes>
    </Router>
  )
}

export default App
