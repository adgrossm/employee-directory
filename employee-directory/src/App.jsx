// import React from 'react';
// // import logo from './logo.svg';
// // import Table from "./components/Table/Table";
// // import TableRow from "./components/TableRow/TableRow";
// import './App.css';

// function App() {
//   const [state, setState] = React.useState({
//     users: [],
//     count: 0
//   });

//   React.useEffect(() => {
//     fetch("https://randomuser.me/api/?results=10")
//       .then(res => res.json())
//       .then(res => {
//         console.log(res.results)
//         setState(state => ({ ...state, users: res.results }))
//       })
//       .catch(err => console.warn(err))

//   }, [])

//   return (
//     <div className="App">
//       <button onClick={() => setState({ ...state, count: state.count + 1 })}>{state.count}</button>
//       { 
//         state.users.map((u, i) => <div key={i + '-user'}>
//           <th>First Name</th>
//           <td>{u.name.first} </td>
//           <th>Last Name</th>
//           <td>{u.name.last}</td>
//           </div>)
//       }
//       {/* trying to get Max code to work here with the table */}
//        <>
//             <table className="table table-dark">
//   <thead>
//     <tr>
//       <th scope="col">#</th>
//       <th scope="col">Title</th>
//       <th scope='col'>Year</th>
//       {/* <th scope="col" onClick={()=> this.handleSort()}>Year</th> */}
//     </tr>
//   </thead>
//   <tbody>
//       {this.state.u.map(movie=>(
//         <tr>
//             <th scope="row">{u.id}</th>
//             <td>{u.first}</td>
//             <td>{u.year}</td>
//     </tr>
//       ))}
//   </tbody>
// </table>
//          </>
//     </div>
//   );
// }

// export default App;
