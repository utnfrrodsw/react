import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <div className="hero-section">
        <h1>Welcome to DSWApp</h1>
        <p>A comprehensive React Router example with authentication and layout management</p>
        <div className="hero-features">
          <div className="feature">
            <h3>🔐 Authentication</h3>
            <p>Protected routes with login/logout functionality</p>
          </div>
          <div className="feature">
            <h3>📱 Layout Management</h3>
            <p>Different layouts for public and protected areas</p>
          </div>
          <div className="feature">
            <h3>🛣️ Route Organization</h3>
            <p>Clean route structure with nested routing</p>
          </div>
        </div>
      </div>
      
      <div className="content-section">
        <h2>Getting Started</h2>
        <p>
          This application demonstrates how to implement React Router DOM with:
        </p>
        <ul>
          <li>Public routes (Home, About)</li>
          <li>Protected routes (Dashboard, Profile)</li>
          <li>Layout wrapper routes using Outlet</li>
          <li>Authentication context and protected route components</li>
          <li>Responsive navigation and sidebar</li>
        </ul>
      </div>
    </div>
  );
};

export default Home; 