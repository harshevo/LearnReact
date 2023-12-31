import React from 'react';
import { useState } from  'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";




// class Car extends React.Component {
//     render() 
//     {
//         return <h2>Hi, I am a Car</h2>;
//     }
// }

// function Train() 
// {
//     return <h2>Hi, I am a Train</h2>
// }

// function Colors(props) 
// {
//     return <h2>My color is {props.Color} </h2>;
// }

//components in components
// function Garage() 
// {
//     return (
//         <>
//           <h1>Who lives in my Garage? </h1>
//           <Car />
//         </>
//     );
// }

// class Car extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return <h2>I am a {this.props.model} car!</h2>;
//     }
// } 


// class Person extends React.Component 
// {
//     constructor(props){
//         super(props);
//         this.state = {
//             name:"Harsh",
//             age:"21"
//         }; 
//     }

//     changeName = () => {
//         this.setState({name:"evo"});
//     }

//     render(){
//         return(
//             <div>My name is {this.state.name}
//                 <h2>i am {this.state.age} year old</h2>
//                 <button type="button" onClick={this.changeName}>button</button>
//             </div>
//         );
//     }
// }

// class Person extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             name: "harsh",
//             age: 19
//         }
//     }

//     changeName = () => {
//         this.setState({name:"Eren"})
//         alert("Name changed");
//     }

//     render() {
//         return (
//             <div>
//                 <h1>My name is {this.state.name}</h1>
//                 <h2>I am {this.state.age} year old</h2>
//                 <button type="button" onClick={this.changeName}>changeName</button>
//             </div>
//         ) 
//     }
// }

// function MadeGoal() {
//     return <h1>Goal</h1>;
// }

// function MissedGoal() {
//     return <h1>No Goal</h1>;
// }


// function Goal(props) {
//     const isGoal = props.isGoal;
//     if (isGoal) {
//         return <MadeGoal />
//     }
//     return <MissedGoal />
// }

// function Garage(props) {
//     const cars = props.cars;
//     return (
//         <>
//             <h1>Garage</h1>
//             {cars.length > 0 && 
//                 <h2>You have {cars.length} cars in your garage</h2>
//             }
//         </>
//     );
// }

// const cars = ['Ford', 'BMW', 'Audi'];

// function Car(props) {
//     return <li>I am a { props.brand}</li>;
// }

// function Garage() {
//     // const cars = ['Ford', 'BMW', 'Audi']; 
//     const cars = [
//         {id: 1, brand:'Ford'},
//         {id: 2, brand:'BMW'},
//         {id: 3, brand:'Audi'},
//     ]
//     return (
//         <>
//             <h1>Who live is my Garage?</h1>
//             <ul>
//                 {/* {cars.map((car) => <Car brand={car}/>)} */}
//                 {cars.map((car) => <Car key={car.id} brand={car.brand}/>)}
//             </ul>
//         </>
//     );
// }

// function MyForm() {
    // const [name, setName] = useState("");

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     alert(`The name you entered was: ${name}`)
    // }

    // return (
    //     <form onSubmit={handleSubmit}>
    //         <label> Enter your name:
    //             <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
    //         </label>
    //         <input type="submit"/>
    //     </form>
    // )

//     const [inputs, setInputs] = useState({});

//     const handleChange = (event) => {
//         const name = event.target.name;
//         const value = event.target.value;
//         setInputs(values => ({...values, [name]: value}))
//     }

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         console.log(inputs)
//     }

//     return (
//         <form onSubmit={handleSubmit}>
//             <label>
//                 Enter Your Name:
//                 <input type="text" name="username" value={inputs.username || ""}
//                 onChange={handleChange}
//                 />
//             </label>
//             <label>
//                 Enter Your Age:
//                 <input type="number" name="age" value={inputs.age || ""}
//                 onChange={handleChange}
//                 />
//             </label>
//             <input type="submit" />
//         </form>
//     )
// }

// function MyText() {
//     const [textarea, setTextarea] = useState(
//         "hi there"
//     );

//     const handleChange = (event) => {
//         setTextarea(event.target.value)
//     }

//     return (
//         <form>
//             <textarea value={textarea} onChange = {handleChange}/>
//         </form>
//     )
// }

// function MyCars() {
//     const [myCar, setMyCar] = useState("Volvo");

//     const handleChange = (event) => {
//         setMyCar(event.target.value)
//     }

//     return (
//         <form>
//             <select value={myCar} onChange={handleChange}>
//                 <option value="ford">ford</o ption>
//                 <option value="volvo">volvo</option>
//                 <option value="fiat">fiat</option>
//             </select>
//         </form>
//     )
// }



// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render()

// export default function App() 
// {
//     return (
//         <BrowserRouter>
//             <Routes>
//                 <Route path="/" element={<Layout />}>
//                     <Route index element={<Home/>}/>
//                     <Route path="blogs" element={<Blogs/>}/>
//                     <Route path="contact" element={<Contact/>}/>
//                     <Route Path="*" element={<NoPage/>}/>
//                 </Route>
//             </Routes>
//         </BrowserRouter>
//     );
// }

// const App = () => {
//     const [count, setCount] = useState(0);
//     const [todos, setTodos] = useState(["todo1", "todo2"]);

//     const increment = () => {
//         setCount((c) => c + 1);
//     };

//     const myStyle = {
//         color: "White",
//         backgroundColor:"DodgerBlue",
//         padding: "10px",
//         fontFamily: "Sans-Serif"
//     };

//     return (
//         <>
//             <todos todos={todos}/>
//             <hr/>
//             <div style={myStyle}>
//                 Count:{count}
//                 <button onClick={increment}>+</button>
//             </div>
//         </>
//     );
// };

function FavoriteColor() {
    const [color, setColor] = useState("red");
    
    return (
        <>
            <h1>My FavoriteColor is {color}!</h1>
            <button
                type="button"
                onClick={() => setColor("blue")}
            >changeColor</button>

            <button
                type="button"
                onClick={() => setColor("red")}
            >changeColor</button>

            <button
                type="button"
                onClick={() => setColor("green")}
            >changeColor</button>
        </>
    )
}

const root  = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FavoriteColor/>)