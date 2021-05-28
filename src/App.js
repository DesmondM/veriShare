import React, {useState} from "react";
import {mirandaData} from './dataz';
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
         <h3> <input type="text" value ={user.miranda_Name}></input></h3>



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
