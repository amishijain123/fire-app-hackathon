import os
from decimal import ROUND_HALF_UP, Decimal, InvalidOperation

from dotenv import load_dotenv
from flask import Flask, jsonify, request
from flask_cors import CORS

# Load environment variables (optional, if using .env)
load_dotenv()

# Create Flask app
app = Flask(__name__)
CORS(app)  # Enable Cross-Origin requests


# Health check route
def calculate_fire(monthly_income: float, monthly_expenses: float, return_rate: float = 0.05):
    try:
        annual_expenses = monthly_expenses * 12
        fire_number = annual_expenses * 25
        yearly_savings = (monthly_income - monthly_expenses) * 12

        savings = 0
        years_to_fire = 0
        projections = []

        if yearly_savings <= 0:
            return {
                "fire_number": fire_number,
                "years_to_fire": None,
                "projections": [],
                "message": "Your savings rate is zero or negative. FIRE is not possible with current values.",
            }

        while savings < fire_number and years_to_fire < 100:
            savings = savings * (1 + return_rate) + yearly_savings
            years_to_fire += 1
            projections.append(
                {
                    "year": years_to_fire,
                    "savings": float(
                        Decimal(savings).quantize(Decimal("0.01"), rounding=ROUND_HALF_UP)
                    ),
                }
            )

        return {
            "fire_number": float(Decimal(fire_number).quantize(Decimal("0.01"))),
            "years_to_fire": years_to_fire,
            "projections": projections,
        }
    except Exception as e:
        return {"error": f"Calculation error: {str(e)}"}


@app.route("/api/ping", methods=["GET"])
def ping():
    return jsonify({"message": "pong"}), 200


# Savings reporting route
@app.route("/api/savings", methods=["POST"])
def report_savings():
    """
    Accepts JSON: { "savings": 1234.56 }
    Returns formatted savings amount.
    """
    data = request.get_json()

    if not data or "savings" not in data:
        return jsonify({"error": "Missing 'savings' in request"}), 400

    try:
        savings = Decimal(str(data["savings"]))

        if savings < 0:
            return jsonify({"error": "Savings amount cannot be negative."}), 400

        formatted = f"₹{savings:,.2f}"
        return (
            jsonify(
                {
                    "message": "Savings recorded successfully.",
                    "amount": float(savings),
                    "formatted": formatted,
                }
            ),
            200,
        )

    except (InvalidOperation, ValueError, TypeError):
        return jsonify({"error": "Invalid savings amount. Must be a number."}), 400


@app.route("/api/fire", methods=["POST"])
def fire():
    data = request.get_json()
    if not data:
        return jsonify({"error": "No data provided"}), 400

    try:
        monthly_income = float(data["monthly_income"])
        monthly_expenses = float(data["monthly_expenses"])
        return_rate = float(data.get("return_rate", 0.05))
    except (KeyError, ValueError, TypeError):
        return jsonify({"error": "Invalid input. Provide numeric values."}), 400

    result = calculate_fire(monthly_income, monthly_expenses, return_rate)
    return jsonify(result), 200


if __name__ == "__main__":
    app.run(port=8080, debug=True)
