/**
 * Subburathinam Calculator - JavaScript Functions
 * A modern calculator with advanced operations and history tracking
 */

// Calculator operations and utility functions
const Calculator = {
    // Main calculation function
    calculate() {
        const num1 = parseFloat(document.getElementById('num1').value);
        const num2 = parseFloat(document.getElementById('num2').value);
        const operation = document.getElementById('operation').value;
        let result = 0;

        // Validate first number
        if (isNaN(num1)) {
            this.showAlert("Please enter the first number");
            return;
        }

        // Perform calculation based on operation
        try {
            switch (operation) {
                case 'add':
                    if (isNaN(num2)) { this.showAlert("Please enter the second number"); return; }
                    result = num1 + num2;
                    break;
                    
                case 'subtract':
                    if (isNaN(num2)) { this.showAlert("Please enter the second number"); return; }
                    result = num1 - num2;
                    break;
                    
                case 'multiply':
                    if (isNaN(num2)) { this.showAlert("Please enter the second number"); return; }
                    result = num1 * num2;
                    break;
                    
                case 'divide':
                    if (isNaN(num2)) { this.showAlert("Please enter the second number"); return; }
                    if (num2 === 0) { this.showAlert("Cannot divide by zero"); return; }
                    result = num1 / num2;
                    break;
                    
                case 'percentage':
                    if (isNaN(num2)) { this.showAlert("Please enter the second number"); return; }
                    result = (num1 * num2) / 100;
                    break;
                    
                case 'square':
                    result = num1 * num1;
                    break;
                    
                case 'sqrt':
                    if (num1 < 0) { this.showAlert("Cannot calculate square root of negative number"); return; }
                    result = Math.sqrt(num1);
                    break;
                    
                case 'power':
                    if (isNaN(num2)) { this.showAlert("Please enter the second number"); return; }
                    result = Math.pow(num1, num2);
                    break;
                    
                default:
                    this.showAlert("Invalid operation selected");
                    return;
            }

            // Display result and save to history
            this.displayResult(result);
            this.saveHistory(num1, num2, operation, result);
            
        } catch (error) {
            this.showAlert("An error occurred during calculation");
            console.error('Calculation error:', error);
        }
    },

    // Display result with animation
    displayResult(result) {
        const resultElement = document.getElementById('result');
        const formattedResult = this.formatNumber(result);
        
        resultElement.style.opacity = '0';
        setTimeout(() => {
            resultElement.textContent = `Result: ${formattedResult}`;
            resultElement.style.opacity = '1';
        }, 150);
    },

    // Format number for display
    formatNumber(num) {
        if (Number.isInteger(num)) {
            return num.toString();
        }
        return parseFloat(num.toFixed(8)).toString();
    },

    // Save calculation to history
    saveHistory(num1, num2, operation, result) {
        const historyDiv = document.getElementById('history');
        const entry = document.createElement('div');
        entry.className = "history-entry";
        
        const operationSymbol = this.getOperationSymbol(operation);
        const formattedResult = this.formatNumber(result);
        
        if (operation === 'square' || operation === 'sqrt') {
            entry.textContent = `${operationSymbol}${num1} = ${formattedResult}`;
        } else {
            entry.textContent = `${num1} ${operationSymbol} ${num2} = ${formattedResult}`;
        }
        
        // Add timestamp
        const timestamp = new Date().toLocaleTimeString();
        entry.title = `Calculated at ${timestamp}`;
        
        historyDiv.appendChild(entry);
        
        // Scroll to bottom of history
        historyDiv.scrollTop = historyDiv.scrollHeight;
    },

    // Get operation symbol for display
    getOperationSymbol(operation) {
        const symbols = {
            'add': '+',
            'subtract': '-',
            'multiply': '×',
            'divide': '÷',
            'percentage': '% of',
            'square': 'Square of ',
            'sqrt': '√',
            'power': '^'
        };
        return symbols[operation] || '';
    },

    // Clear calculation history
    clearHistory() {
        const historyDiv = document.getElementById('history');
        while (historyDiv.children.length > 1) {
            historyDiv.removeChild(historyDiv.lastChild);
        }
        
        // Show confirmation
        this.showAlert("History cleared!", 'success');
    },

    // Clear all inputs and result
    clearAll() {
        document.getElementById('num1').value = '';
        document.getElementById('num2').value = '';
        document.getElementById('operation').selectedIndex = 0;
        document.getElementById('result').textContent = 'Result will appear here';
        
        // Focus on first input
        document.getElementById('num1').focus();
        
        this.showAlert("All fields cleared!", 'success');
    },

    // Show alert messages
    showAlert(message, type = 'error') {
        // Create alert element
        const alert = document.createElement('div');
        alert.className = `alert alert-${type}`;
        alert.textContent = message;
        alert.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 10px 20px;
            border-radius: 5px;
            color: white;
            font-weight: bold;
            z-index: 10000;
            animation: slideIn 0.3s ease-out;
            background: ${type === 'error' ? '#ff6b6b' : '#28a745'};
        `;
        
        document.body.appendChild(alert);
        
        // Remove after 3 seconds
        setTimeout(() => {
            alert.style.animation = 'slideOut 0.3s ease-in';
            setTimeout(() => {
                if (alert.parentNode) {
                    alert.parentNode.removeChild(alert);
                }
            }, 300);
        }, 3000);
    }
};

// Global functions for HTML onclick events
function calculate() {
    Calculator.calculate();
}

function clearHistory() {
    Calculator.clearHistory();
}

function clearAll() {
    Calculator.clearAll();
}

// Keyboard support
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        calculate();
    } else if (event.key === 'Escape') {
        clearAll();
    }
});

// Add CSS for alert animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Initialize calculator when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('Subburathinam Calculator initialized successfully!');
    document.getElementById('num1').focus();
});
