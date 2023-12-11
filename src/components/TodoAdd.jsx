import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../slices/todosSlice';

const TodoAdd = () => {
  const [newTask, setNewTask] = useState('');
  const [color, setColor] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      const taskData = { text: newTask };
      if (color.trim() !== '') {
        taskData.priority = color;
        taskData.className = color === 'Rouge' ? 'urgent' : 'pas-urgent';
      }

      dispatch(addTask(taskData));
      setNewTask('');
      setColor('');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a new task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <select value={color} onChange={(e) => setColor(e.target.value)}>
      <option value="gris">Choisir une priorité</option>
        <option value="Vert">Pas urgent</option>
        <option value="Rouge">Urgent</option>
      </select>
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TodoAdd;