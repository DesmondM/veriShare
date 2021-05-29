import React, {useState} from "react";
import {mirandaData} from './dataz';
import {outcomes} from './phoneOutcome';
import ReactPaginate from 'react-paginate';
import './App.css';
import {Miranda} from './Miranda';

function App() {
   const [users, setUsers] =useState(mirandaData.slice(0,10));
   const [pageNumber, setPageNumber] = useState(0);

   const usersPerPage =2;
   const pagesVisited = pageNumber*usersPerPage;
   const displayUsers = users
      .slice(pagesVisited,pagesVisited+usersPerPage)
      .map((user)=>{
        return(
          <div className = "user">
         
         <select>
           <option selected disabled = "true">Select Oucome</option>
          {
          outcomes.map((result)=>(<option text={result.phoneOutcomeNo}>{result.phoneOutcome}</option>))
          }
         
         </select>
         <h3> <textarea  value ={user.script}></textarea></h3>


         <h3><input type="text" value ={user.miranda_Script_No}></input></h3>
         <h3><input type="text" value ={user.true_Script}></input></h3>
         <h3><input type="text" value ={user.false_Script}></input></h3>
         </div>
        );
      });
  const pageCount = Math.ceil(users.length/usersPerPage);

  const changePage = ({selected})=>{
    setPageNumber(selected);
  }    

  return( <div className="App">
   {displayUsers} 
    <ReactPaginate
    previousLabel={"Previous"}
    nextLabel = {"Next"}
   pageCount={pageCount}
    onPageChange={changePage}
    containerClassName={"paginationBttns"}
    previousLinkClassName = {"previousBttn"}
    nextLinkClassName = {"nextBttn"}
    disabledClassName = {"paginationDisabled"}
    activeClassName = {"paginationActive"} 
    />
    </div>
  );
    }
export default App;
