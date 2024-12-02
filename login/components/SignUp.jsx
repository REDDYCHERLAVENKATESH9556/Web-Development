import  { useState } from "react";
import { useNavigate } from "react-router-dom";
function SignUp() {
 const [name, setName] = useState("");
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const navigate = useNavigate();
 const handleSignUp = () => {
   if (name && email && password) {
     localStorage.setItem("user", JSON.stringify({ name, email, password }));
     alert("Sign up successful! You can now log in.");
     navigate("/login");
   } else {
     alert("Please fill all the fields.");
   }
 };
 return (
<div style={styles.wrapper}>
<div style={styles.container}>
<h2 style={styles.heading}>Sign Up</h2>
<input
         type="text"
         placeholder="Name"
         value={name}
         onChange={(e) => setName(e.target.value)}
         style={styles.input}
       />
<input
         type="email"
         placeholder="Email"
         value={email}
         onChange={(e) => setEmail(e.target.value)}
         style={styles.input}
       />
<input
         type="password"
         placeholder="Password"
         value={password}
         onChange={(e) => setPassword(e.target.value)}
         style={styles.input}
       />
<div style={styles.buttonRow}>
<button onClick={handleSignUp} style={styles.button}>
           Sign Up
</button>
<button onClick={() => navigate("/login")} style={styles.secondaryButton}>
           Login
</button>
</div>
</div>
</div>
 );
}
const styles = {
 wrapper: {
   display: "flex",
   justifyContent: "center",
   alignItems: "center",
   height: "100vh",
   width: "100vw",
   backgroundColor: "#f0f0f0",
   margin: "0", 
 },
 container: {
   width: "400px",
   padding: "30px",
   backgroundColor: "#fff",
   borderRadius: "10px",
   boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
   textAlign: "center",
 },
 heading: {
   fontSize: "24px",
   marginBottom: "20px",
   fontWeight: "600",
    color: "#6200ea",
 },
 input: {
   width: "80%",
   padding: "10px",
   margin: "10px 0",
   borderRadius: "5px",
   border: "1px solid #ccc",
   backgroundColor:"#f9f9f9",
   color:"#333",
   fontSize:"16px",
 },
 buttonRow: {
   display: "flex",
   justifyContent: "space-between",
   marginTop: "20px",
 },
 button: {
   padding: "10px 20px",
   backgroundColor: "#6200ea",
   color: "#fff",
   border: "none",
   borderRadius: "5px",
   cursor: "pointer",
   width: "48%",
 },
 secondaryButton: {
   padding: "10px 20px",
   backgroundColor: "#f8f8f8",
   color: "#6200ea",
   border: "1px solid #6200ea",
   borderRadius: "5px",
   cursor: "pointer",
   width: "48%",
 },
};
export default SignUp;
