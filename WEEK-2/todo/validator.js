          // 1. Validate task title (not empty, min 3 chars)
                     export function validateTitle(title) {
                        // Your code here
                        const validateTitle = title.length>=3 ? "valid" : "Invalid";
                        return validateTitle;
                      }
                      
                      // 2. Validate priority (must be: low, medium, high)
                     export function validatePriority(priority) {
                        // Your code here
                        let validPriorities = ["low", "medium", "high"];
                        const validatePriority = validPriorities.includes(priority) ? "True" : "False";
                        return validatePriority;
                      }
                      
                      // 3. Validate due date (must be future date)
                      export function validateDueDate(date) {
                        // Your code here
                        let dueDate = new Date(date);
                        const validateDueDate = dueDate > new Date() ? "True" : "False";
                        return validateDueDate;
                      }