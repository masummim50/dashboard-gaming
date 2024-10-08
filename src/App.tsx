import "./App.css";
import MainSection from "./components/main/MainSection";
import RightSide from "./components/rightside/RightSide";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className="bg-gray-800 min-h-[100vh] p-2">
      <div className="flex gap-4">
        <Sidebar />

        <div className="main flex-grow">
          <MainSection/>
        </div>
        <div className="last">
          <RightSide/>
        </div>
      </div>
    </div>
  );
}

export default App;
