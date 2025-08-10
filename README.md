# Subburathinam Calculator

A modern, smart calculator project built with **Java Spring Boot** backend and a responsive **HTML/CSS/JavaScript** frontend.

---

## Features

- Supports addition, subtraction, multiplication, division, percentage, square, square root, and power operations
- Interactive and responsive user interface with history tracking
- Backend API built with Spring Boot to perform calculations
- Frontend communicates with backend API asynchronously via REST
- Clean, minimal, and glitch effect UI styling
- Keyboard support for easy usage

---

## Live Demo

- Frontend deployed on GitHub Pages:  
  [https://subburathinam-m.github.io/subbu-calculator/](https://subburathinam-m.github.io/subbu-calculator/)

- Backend API (example Heroku or other host URL):  
  `https://your-backend-url.com/api/calculate`

---

## Technologies Used

- Java 17+
- Spring Boot (REST API)
- HTML5, CSS3, JavaScript (Vanilla)
- Git & GitHub for version control and deployment

---

## Getting Started

### Prerequisites

- Java 17 or above installed
- Maven installed
- Node.js & npm (optional, if you plan to build frontend locally)

### Running Backend Locally

1. Clone the repo  
   ```bash
   git clone https://github.com/subburathinam-M/subbu-calculator.git
   cd subbu-calculator



## Build and Run Spring Boot Backend
 
 ```bash
./mvnw clean package
java -jar target/WebCalculator-0.0.1-SNAPSHOT.jar
Backend runs on default port 8080

API endpoint example:
http://localhost:8080/api/calculate?num1=5&num2=10&operation=add

Running Frontend Locally
Open the index.html file in your browser.

Make sure the API endpoint in your JavaScript points to your local backend URL (http://localhost:8080/api/calculate).

Deployment
Frontend
Deploy frontend to GitHub Pages by hosting your static files in the docs/ folder or root branch.

Backend
Deploy Spring Boot backend to Heroku, AWS, or any cloud provider.

Update frontend API URLs to your deployed backend URL.

###Usage
Enter numbers and select the operation.

Click Calculate to see the result.

History of calculations is shown below.

Use Clear All to reset inputs and result.

Use Clear History to clear previous calculations.

Contributing
Contributions are welcome!
Please open issues or pull requests to improve the project.

License
MIT License © Subburathinam M

Contact
GitHub: https://github.com/subburathinam-M

Email: your-email@example.com
