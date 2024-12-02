
function Home() {
 return (
<div style={styles.wrapper}>
<div style={styles.container}>
<h1 style={styles.heading}>Welcome to Xhawi</h1>
<p style={styles.subText}>Welcome to Omantel EShop</p>
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
   textAlign: "center",
   padding: "30px",
   backgroundColor: "#fff",
   borderRadius: "10px",
   boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
 },
 heading: {
   fontSize: "28px",
   fontWeight: "600",
   marginBottom: "10px",
   color: "#6200ea",
 },
 subText: {
   fontSize: "18px",
   color: "#555",
 },
};
export default Home;
