// const Form = (props) => {
//   return (
//     <>
//       {props.stateMain && (
//         <div className="container">
//           <header>
//             <h1>Create Account</h1>
//           </header>

//           <form onSubmit={props.setOnSub}>
//             <p>Name</p>
//             <input
//               type="text"
//               placeholder="Jean Dupont"
//               onChange={props.nameChange}
//               value={props.username}
//             />
//             <p>Email</p>
//             <input
//               type="email"
//               placeholder="jeandupont@lereacteur.io"
//               onChange={props.emailChange}
//               value={props.email}
//             />
//             <p>Password</p>
//             <input
//               type="password"
//               placeholder="lErEaCtEuR2024"
//               onChange={(event) => {
//                 () => {
//                   {
//                     props.passwordChange(event.target.value);
//                   }
//                 };
//               }}
//               value={props.password}
//             />
//             <p>Confirm your password</p>
//             <input
//               type="password"
//               placeholder="lErEaCtEuR2024"
//               onChange={(event) => {
//                 () => {
//                   {
//                     props.passwordChangeBis(event.target.value);
//                   }
//                 };
//               }}
//               value={props.passwordBis}
//             />
//             <button type="submit">Register</button>
//             {props.errorMessage && (
//               <p style={{ color: "red", marginTop: "20px" }}>
//                 Les mots de passe ne sont pas identiques
//               </p>
//             )}
//           </form>
//         </div>
//       )}
//     </>
//   );
// };

// export default Form;
