import { useNavigate } from 'react-router-dom';
import { logout } from '@services/Users';

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const result = await logout();
      if (result) navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <div>
      <header className="header">
        <div className="header-content">
          <h1>Dashboard</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </header>
      <div>Home</div>
    </div>
  );
};

export default Home;