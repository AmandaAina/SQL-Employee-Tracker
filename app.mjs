// app.mjs
import { prompt } from 'inquirer';
import Database from './queries.js';

async function startApplication() {
  // Use prompt to present options and handle user input
  // Call the appropriate functions from your Database class based on user choices

  // Example: Display options and handle user input
  const userChoice = await prompt([
    {
      type: 'list',
      name: 'action',
      message: 'What would you like to do?',
      choices: [
        'View all departments',
        'Add a department',
        // Add other choices based on your requirements
      ],
    },
  ]);

  // Example: Handle user choice and call the corresponding Database function
  switch (userChoice.action) {
    case 'View all departments':
      const departments = await Database.getAllDepartments();
      console.table(departments[0]);
      break;

    case 'Add a department':
      const departmentName = await prompt({
        type: 'input',
        name: 'name',
        message: 'Enter the name of the department:',
      });

      await Database.addDepartment(departmentName.name);
      console.log('Department added successfully!');
      break;

    // Add cases for other choices

    default:
      console.log('Invalid choice');
  }
}

// Call startApplication to begin the application
startApplication();
