
# Checklist Dashboard Project

This project is a Checklist Dashboard built using Node.js for the backend and a simple frontend interface. It evaluates a set of predefined conditions based on data fetched from an API and displays the results on a user-friendly dashboard.




## Features

- Fetches data dynamically from a remote API.

- Evaluates checklist rules dynamically based on predefined conditions.

- Displays results with a visually appealing dashboard.

- Interactive gradient button and animated spinner loader.

- Modular structure for easy maintenance and scalability.


## Tech Stack

**Client:** HTML5, CSS3, JavaScript

**Server:** Node.js, Express.js, Axios


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`= 




## Checklist Rules

The following rules are evaluated based on the API data:

- Valuation Fee Paid: isValuationFeePaid must be true.

- UK Resident: isUkResident must be true.

- Risk Rating Medium: riskRating must be "Medium".

- LTV Below 60%: Loan-to-Value ratio calculated as (Loan Required / Purchase Price) * 100 must be less than 60%.
## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd checklistsystem
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## View In Frontend

- Open the browser and navigate to http://localhost:3000.

- Click the "Load Checklist" button to fetch and display results.


## Authors

- [Ashwani Kumar](https://www.github.com/ashu2764)

