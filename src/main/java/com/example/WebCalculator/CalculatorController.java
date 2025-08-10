package com.example.WebCalculator;


import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class CalculatorController {

    @GetMapping("/calculate")
public double calculate(
        @RequestParam double num1,
        @RequestParam(required = false) Double num2,
        @RequestParam String operation) {

    return switch (operation.toLowerCase()) {
        case "add" -> {
            if (num2 == null) throw new IllegalArgumentException("Second number required");
            yield num1 + num2;
        }
        case "sub" -> {
            if (num2 == null) throw new IllegalArgumentException("Second number required");
            yield num1 - num2;
        }
        case "mul" -> {
            if (num2 == null) throw new IllegalArgumentException("Second number required");
            yield num1 * num2;
        }
        case "div" -> {
            if (num2 == null) throw new IllegalArgumentException("Second number required");
            if (num2 == 0) throw new ArithmeticException("Cannot divide by zero");
            yield num1 / num2;
        }
        case "perc" -> {
            if (num2 == null) throw new IllegalArgumentException("Second number required");
            yield (num1 * num2) / 100;
        }
        
        case "square" -> num1 * num1;
        case "sqrt" -> {
            if (num1 < 0) throw new ArithmeticException("Cannot take sqrt of negative number");
            yield Math.sqrt(num1);
        }
        case "pow" -> Math.pow(num1, num2 != null ? num2 : 0);
        default -> throw new IllegalArgumentException("Invalid operation");
    };
}
}