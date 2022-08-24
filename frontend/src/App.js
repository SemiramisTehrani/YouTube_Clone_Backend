// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";

import axios from "axios";
import {KEY} from "./localKey";

import "bootstrap/dist/css/bootstrap.min.css";

// Pages Imports
// import HomePage from "./pages/HomePage/HomePage";
// import LoginPage from "./pages/LoginPage/LoginPage";
// import RegisterPage from "./pages/RegisterPage/RegisterPage";

import Home from "./Components/Home/Home";
import LoginForm from "./Components/LoginForm/LoginForm";
import RegistrationForm from "./Components/RegistrationForm/RegistrationForm";


// Component Imports
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";



//Util Imports
import PrivateRoute from "./utils/PrivateRoute";

// function App() {
//   return (
//     <div>
//       <Navbar />
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <PrivateRoute>
//               <HomePage />
//             </PrivateRoute>
//           }
//         />
//         <Route path="/register" element={<RegisterPage />} />
//         <Route path="/login" element={<LoginPage />} />
//       </Routes>
//       <Footer />
//     </div>
//   );
// }

// export default App;

function App() {
  const [videoTitle, setVideoTitle] = useState("");
  const [user, setUser] = useState(null);
  const [currentVideoId, setVideoId] = useState("");
  const [search, setSearch] = useState("");
  const [storedUserName, setStoredUserName] = useState("");

  useEffect(() => {
    const jwt = localStorage.getItem("token");

    try {
      const decodedUser = jwt_decode(jwt);
      setUser(decodedUser);
    } catch {}
    getVideo();
  }, []);

  async function getVideo(request) {
    let response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?q=${search}&key=${KEY.googleAPIkey}&type=video`
    );
    console.log("getVideo function response data", response.data);
    try {
      setVideoId(response.data.items[0].id.videoId);
    } catch {}
  }

  return (
    <div className="App">
      <NavBar
        search={search}
        setSearch={setSearch}
        getVideo={getVideo}
        // logoutUser={logoutUser}
      />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home
              videoId={currentVideoId}
              setVideoId={setVideoId}
              user={user}
              setUser={setUser}
              storedUserName={storedUserName}
            />
          }
        />
        <Route
          path="home"
          element={() => {
            if (!user) {
              return <LoginForm />;
            } else {
              return <Home user={user} />;
            }
          }}
        />
        <Route
          path="loginform/*"
          element={
            <LoginForm user={user} setStoredUserName={setStoredUserName} />
          }
        />
        <Route
          exact
          path="loginform/registration"
          element={<RegistrationForm />}
        />
      </Routes>
    </div>
  );
}

export default App;
