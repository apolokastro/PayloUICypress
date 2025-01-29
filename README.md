# PostmanProject
Paylocity benefits

This repo contains a Postman project which has some endpoints and scripts to test Employee benefits API behavior.

# Details
# URL and Login info:

URL: https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/Account/Login

Your username, password, and auth token for API testing will be provided to you in a
separate email.

• Username: TestUser713
• Password: >fg_G_mmz?=2
• Authorization Code: Basic VGVzdFVzZXI3MTM6PmZnX0dfbW16Pz0y 

# API Documentation:
The API documentation can be found at the below link:
https://documenter.getpostman.com/view/2314100/SWTEbbi6
Note that you will need to use your assigned auth token in the header of your requests
in order to access the API.
For example: Key: Authorization; Value: Basic <authToken>

Postman users can use the “Run in Postman” button to migrate the requests to their
Postman account. If you prefer Swagger documentation, you can find it

here: https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/swagger/v1/swagger.json

# The Application:
One of the critical functions that we provide for our clients is the ability to pay for their
employees’ benefits packages. A portion of these costs are deducted from their
paycheck, and we handle that deduction. This is a small, buggy, sample application
that allows the user (an employer) to add, edit, and delete employees and their dependents.

# Assumptions:
  • All employees are paid $2000 per paycheck before deductions
  • There are 26 paychecks in a year
  • The cost of benefits is $1000/year for each employee
  • Each dependent incurs a cost of $500/year


# User Story:
As an Employer, I want to input my employee data so that I can get a preview of benefit costs.

# Acceptance Criteria

Scenario 1: Add Employee
GIVEN an Employer
AND I am on the Benefits Dashboard page
WHEN I select Add Employee
THEN I should be able to enter employee details
AND the employee should save
AND I should see the employee in the table
AND the benefit cost calculations are correct

Scenario 2: Edit Employee
GIVEN an Employer
AND I am on the Benefits Dashboard page
WHEN I select the Action Edit
THEN I can edit employee details
AND the data should change in the table

Scenario 3: Delete Employee
GIVEN an Employer
AND I am on the Benefits Dashboard page
WHEN I click the Action X
THEN the employee should be deleted

# Instruction
  • Install vscode
  • Install node.js
  • Install cypress
  • cypress-mochawesome-reporter
  • Clone this repo

# Run project
We can run this project running the following comands:

"scripts": {
    "cypress:open": "cypress open",
    "chrome": "cypress run --browser chrome --headed"
  }

  NOTE: Only "chrome" command is able to create a html report. You can check report created in "reports folder"
  
