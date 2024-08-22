import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Results from "./components/Results";
// import Form from "./components/Form";

function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordBis, setPasswordBis] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);

  const [mainPage, setMainPage] = useState(true);
  const [confirmPage, setConfirmPage] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }; // fonction de mise a jour dans l'input Name

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }; // fonction de mise a jour dans l'input Email

  const handleReturn = () => {
    setMainPage(true);
    setConfirmPage(false);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();

    if (password === passwordBis) {
      // history.push('/')
      setMainPage(false);
      setConfirmPage(true);
    } else {
      setErrorMessage(true);
      alert("Les mots de passe ne sont pas identiques");
    }
  };

  return (
    <>
      {mainPage && (
        <div className="container">
          <header>
            <h1>Create Account</h1>
          </header>

          <form onSubmit={handleOnSubmit}>
            <p>Name</p>
            <input
              type="text"
              placeholder="Jean Dupont"
              onChange={handleUsernameChange}
              value={username}
            />
            <p>Email</p>
            <input
              type="email"
              placeholder="jeandupont@lereacteur.io"
              onChange={handleEmailChange}
              value={email}
            />
            <p>Password</p>
            <input
              type="password"
              placeholder="lErEaCtEuR2024"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              value={password}
            />
            <p>Confirm your password</p>
            <input
              type="password"
              placeholder="lErEaCtEuR2024"
              onChange={(event) => {
                setPasswordBis(event.target.value);
              }}
              value={passwordBis}
            />
            <button type="submit">Register</button>
            {errorMessage && (
              <p style={{ color: "red", marginTop: "20px" }}>
                Les mots de passe ne sont pas identiques
              </p>
            )}
          </form>
        </div>
      )}

      <Results
        state={confirmPage}
        name={username}
        mail={email}
        password={password}
        return={handleReturn}
      />

      <Footer />
    </>
  );
}

export default App;
