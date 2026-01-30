// app.js
// Main application file

import {addTask,getAllTasks,completeTask} from './task.js';

// 1. Add tasks
console.log(addTask(' groceries', 'medium', '2026-12-01'));
console.log(addTask('bills', 'high', '2023-01-01')); // Invalid (past date)

// 2. Display all tasks
console.log('\nAll Tasks:',getAllTasks());

// 3. Complete a task
console.log('\nCompleting Task 1:',completeTask(1));

// 4. Display all tasks again
console.log('\nUpdated Tasks:',getAllTasks());
