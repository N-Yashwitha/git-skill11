import React, { useState } from "react";
import "./StudentManager.css";

function StudentManager() {

const initialStudents = [
{id:2400031000,name:"Rahul",course:"CSE"},
{id:2400031001,name:"Sneha",course:"AI&DS"},
{id:2400031002,name:"Arjun",course:"IT"},
{id:2400031003,name:"Priya",course:"CS"},
{id:2400031004,name:"Kiran",course:"CSE"}
];

const [students,setStudents] = useState(initialStudents);

const [newStudent,setNewStudent] = useState({
id:"",
name:"",
course:""
});

const handleChange = (e) => {
const {name,value} = e.target;
setNewStudent({...newStudent,[name]:value});
};

const addStudent = () => {
setStudents([...students,newStudent]);
setNewStudent({id:"",name:"",course:""});
};

const deleteStudent = (id) => {
const updated = students.filter((student)=>student.id!==id);
setStudents(updated);
};

return (
<div>

<h2>Student Manager</h2>

<input
name="id"
placeholder="ID"
value={newStudent.id}
onChange={handleChange}
/>

<input
name="name"
placeholder="Name"
value={newStudent.name}
onChange={handleChange}
/>

<input
name="course"
placeholder="Course"
value={newStudent.course}
onChange={handleChange}
/>

<button onClick={addStudent}>Add Student</button>

{students.length === 0 ? (
<p>No Students Available</p>
) : (
<ul>
{students.map((student)=>(
<li key={student.id}>
{student.id} - {student.name} - {student.course}
<button onClick={()=>deleteStudent(student.id)}>Delete</button>
</li>
))}
</ul>
)}

</div>
);
}

export default StudentManager;