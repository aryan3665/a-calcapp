// Basic Calculator Function
function calculate() {
    let expression = document.getElementById("calcExpression").value;
    try {
        document.getElementById("calcResult").innerText = "Result: " + eval(expression);
    } catch {
        document.getElementById("calcResult").innerText = "Invalid Expression";
    }
}

// Number Conversion Function
function convertNumber() {
    let num = parseInt(document.getElementById("number").value);
    if (isNaN(num)) {
        document.getElementById("conversionResult").innerText = "Enter a valid number";
        return;
    }

    let roman = toRoman(num);
    let binary = num.toString(2);
    let octal = num.toString(8);
    let hexa = num.toString(16).toUpperCase();

    document.getElementById("conversionResult").innerText = 
        `Roman: ${roman}, Binary: ${binary}, Octal: ${octal}, Hexadecimal: ${hexa}`;
}

// Convert to Roman Numerals
function toRoman(num) {
    let val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let syb = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    let roman = "";
    for (let i = 0; i < val.length; i++) {
        while (num >= val[i]) {
            roman += syb[i];
            num -= val[i];
        }
    }
    return roman;
}

// Math Problem Solver
function evaluateExpression() {
    let input = document.getElementById("expression").value;
    if (input.startsWith("solve ")) {
        let exp = input.slice(6);
        try {
            document.getElementById("result").innerText = "Solution: " + eval(exp);
        } catch {
            document.getElementById("result").innerText = "Invalid Expression";
        }
    } else {
        document.getElementById("result").innerText = "Use 'solve' before the expression";
    }
}

// Math Formulas Collection
const formulas = {
    "algebra": [
        "Quadratic Formula: x = (-b ± √(b² - 4ac)) / 2a",
        "Sum of n natural numbers: n(n+1)/2",
        "Sum of first n even numbers: n(n+1)",
        "Sum of first n odd numbers: n²",
        "Binomial Theorem: (a+b)^n = Σ(nCk * a^(n-k) * b^k)",
        "Arithmetic Sequence: a_n = a + (n-1)d",
        "Geometric Sequence: a_n = a * r^(n-1)",
        "Logarithm Property: log(ab) = log a + log b",
        "Difference of Squares: a² - b² = (a-b)(a+b)",
        "Cubic Expansion: (a+b)^3 = a³ + 3a²b + 3ab² + b³"
    ],
    "geometry": [
        "Area of a Triangle: ½ × base × height",
        "Area of a Circle: πr²",
        "Circumference of a Circle: 2πr",
        "Pythagoras Theorem: a² + b² = c²",
        "Volume of a Cylinder: πr²h",
        "Surface Area of Sphere: 4πr²",
        "Volume of Sphere: (4/3)πr³",
        "Area of Trapezium: ½ × (a + b) × h",
        "Angle Sum of Polygon: (n-2) × 180°",
        "Exterior Angle of a Regular Polygon: 360° / n"
    ],
    "trigonometry": [
        "sin²θ + cos²θ = 1",
        "tanθ = sinθ / cosθ",
        "cos(90°-θ) = sinθ",
        "sin(90°-θ) = cosθ",
        "sec²θ - tan²θ = 1",
        "cosec²θ - cot²θ = 1",
        "sin(A+B) = sinA cosB + cosA sinB",
        "cos(A+B) = cosA cosB - sinA sinB",
        "tan(A+B) = (tanA + tanB) / (1 - tanA tanB)",
        "Law of Sines: a/sinA = b/sinB = c/sinC"
    ],
    "mensuration": [
        "Volume of a Cone: (1/3)πr²h",
        "Surface Area of a Cube: 6a²",
        "Volume of a Cube: a³",
        "Lateral Surface Area of Cylinder: 2πrh",
        "Total Surface Area of Cylinder: 2πr(r+h)",
        "Area of a Rhombus: ½ × d1 × d2",
        "Surface Area of a Hemisphere: 3πr²",
        "Volume of a Hemisphere: (2/3)πr³",
        "Frustum Volume: (1/3)πh(R² + r² + Rr)",
        "Heron's Formula: A = √[s(s-a)(s-b)(s-c)]"
    ]
};

function getFormulas() {
    let chapter = document.getElementById("chapter").value.toLowerCase();
    let formulaList = document.getElementById("formulaList");
    formulaList.innerHTML = "";

    if (formulas[chapter]) {
        formulas[chapter].forEach(formula => {
            let li = document.createElement("li");
            li.textContent = formula;
            formulaList.appendChild(li);
        });
    } else {
        formulaList.innerHTML = "<li>No formulas found for this chapter</li>";
    }
}
