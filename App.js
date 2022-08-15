// import logo from './logo.svg';
import './App.css';
import Navbar from './componets/Navbar';
import TextForm from './componets/TextForm';




function App() {
  return (
  <>
  <Navbar title = "TextUtils" aboutUs = "About"/>


  <div className="container my-3">  

   <TextForm heading  = "Enter your text"/></div>



</>





  );
}

export default App;
