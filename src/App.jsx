import { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from './firebase';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Location from './pages/Location';
import Culture from './pages/Culture';
import Login from './pages/Login';
import Signup from './pages/Signup';

// Wrapper component to protect routes that require login
const ProtectedRoute = ({ user, children }) => {
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center bg-gray-50"><p>Loading...</p></div>;
  }

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar onLogout={handleLogout} user={user} />
        <main className="flex-grow">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={user ? <Navigate to="/" replace /> : <Login />} />
            <Route path="/signup" element={user ? <Navigate to="/" replace /> : <Signup />} />
            
            {/* Protected Routes (Require Login) */}
            <Route path="/explore" element={<ProtectedRoute user={user}><Explore /></ProtectedRoute>} />
            <Route path="/location/:id" element={<ProtectedRoute user={user}><Location /></ProtectedRoute>} />
            <Route path="/culture" element={<ProtectedRoute user={user}><Culture /></ProtectedRoute>} />
            
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
