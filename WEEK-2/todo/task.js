// task.js
// This file contains task-related operations

import {validateTitle,validatePriority,validateDueDate} from './validator.js';
const tasks = [];
// 1. Add new task
export function addTask(title, priority, dueDate) {
  const isTitleValid = validateTitle(title);
  const isPriorityValid = validatePriority(priority);
  const isDueDateValid = validateDueDate(dueDate);

  // If valid pass, add task
  if (isTitleValid && isPriorityValid && isDueDateValid) {
    tasks.push({
      title,
      priority,
      dueDate,
      completed: false
    });
    return 'Task added successfully';
  }

  return 'Error: Invalid task details';
}

// 2. Get all tasks
export function getAllTasks() {
  return tasks;
}

// 3. Mark task as complete
export function completeTask(taskId) {
  if (tasks[taskId]) {
    tasks[taskId].completed = true;
    return 'Task marked as complete';
  }
  return 'Task not found';
}
