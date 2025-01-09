import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Sidebar from "./components/sidebar";
import Dashboard from "./pages/dashboard";
import Upload from "./pages/upload";
import Analytics from "./pages/analytics";
import LiveStream from "./pages/live-stream";

function App() {
  return (
        <Router>
    <div className="App">
      <Sidebar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Dashboard />}/>
          <Route path="/upload" element={<Upload />}/>
          <Route path="/livestream" element={<LiveStream />}/>
          <Route path="/analytics" element={<Analytics />}/>
        </Routes>
      </div>
    </div>
      </Router>
  );
}

export default App;
