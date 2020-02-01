import React, { useState } from 'react';
import './Styles/index.scss'

function TaskAdd(props) {
  let [name, setName] = useState('');
  let [description, setDescription] = useState('');
  let [priority, setPriority] = useState('');
  let [date, setDate] = useState('');
  let [isComplete, setIsComplete] = useState(false);

  return (
    <div className="container">
      <h1 className="text-center">Add Task</h1>
      <hr/>
     
<div className="row">
          <div className="col-lg-12">
      <form
        id='add-task-form'
        onSubmit={e => {
          e.preventDefault();
          setName('');
          setDescription('');
          setPriority('');
          setDate('');
          setIsComplete(false);
        }}
      >
        
       <div className="form-group">
         <label>Task Name</label>
          <input
            id="inputName"
            className="form-control"
            type='text'
            value={name}
            placeholder="Task Name"
           
            onChange={e => {
              setName(e.target.value);
            }}
          /><br/>
         
       </div>
      

       <div className="form-group">
       <label>Description</label>
          <input
            id="inputDesc"
            type='text'
            className="form-control"
            placeholder="Description"
            value={description}
            onChange={e => {
              setDescription(e.target.value);
            }}
          /><br/>
       </div>


      

    
        <div className="form-group">
        <label>Priority</label>
          <input
            id="inputPri"
            className="form-control"
            placeholder="Priority"
            type='number'
            value={priority}
            onChange={e => {
              setPriority(e.target.value);
            }}
          /><br/>
        </div>
      

        <div className="form-group">
        <label>Date</label>
          <input
          id="inputD"
          placeholder="Date"
          className="form-control"
            type='date'
            value={date}
            onChange={e => {
              setDate(e.target.value);
            }}
          />
        </div>
      


        <label>
          Is Complete?
          <input
          
            type='checkbox'
            checked={isComplete}
            onChange={e => {
              setIsComplete(e.target.value);
            }}
          /><br/>
        </label>
        
        </form>
        <button className="btn-primary "
          onClick={() => {
            let data = {
              name,
              description,
              priority,
              isComplete,
              date,
            };
            props.add(data);
          }}
        >
          Save Changes
                </button>
        <button className="btn"
       
        >Clear</button>
     
      </div>
      </div>
    </div>
  );
}

export default TaskAdd;