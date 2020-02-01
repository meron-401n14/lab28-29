import React, { useState } from 'react';
import { dateFix } from '../util';

function TaskEdit(props) {
  let [name, setName] = useState(props.task.name);
  let [description, setDescription] = useState(props.task.description);
  let [priority, setPriority] = useState(props.task.priority);
  let [date, setDate] = useState(dateFix(props.task.date));
  let [isComplete, setIsComplete] = useState(props.task.isComplete);

  console.log(date);

  return (
    <div className="container-fluid">
          <h3 className="text-center">Edit Task</h3>
      <hr/>
      <div className="row">

         
      <form id='edit-task-form'
        onSubmit={e => {
          e.preventDefault();
          props.edit({
            id: props.task.id,
            name,
            description,
            priority,
            date,
            isComplete,
          });
          props.close();
        }}
      >
       
      
          <input
            placeholder="Task Name"
            type='text'
           
            value={name}
            onChange={e => {
              setName(e.target.value);
            }}
          />
     

          <input
            type='text'
            placeholder="description"
          
            value={description}
            onChange={e => {
              setDescription(e.target.value);
            }}
          />
         
       

       
        
            <input
            type='number'
            placeholder="Priority"
            
            value={priority}
            onChange={e => {
              setPriority(e.target.value);
            }}
          />
       
   
       
           <input
           placeholder="Date"
          
            type='date'
            value={date}
            onChange={e => {
              setDate(e.target.value);
            }}
          />
    

        <label>
          Is Complete?
                    <input
            type='checkbox'
            checked={isComplete}
            onChange={e => {
              setIsComplete(e.target.value);
            }}
          />
        </label>
        </form>
        </div>
       

        <button className="btn-primary">Save Changes</button>
        <button className="btn-secondary"
          type='button'
          onClick={() => {
            props.close();
          }}
        >
          Cancel
                </button>
    </div>
   
  );
}

export default TaskEdit;