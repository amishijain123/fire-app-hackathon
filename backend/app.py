import os
from decimal import Decimal, InvalidOperation

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
    fire_number = (monthly_expenses * 12) * 25
    years_to_fire = fire_number / (monthly_income * 12)

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
        return jsonify({
            "message": "Savings recorded successfully.",
            "amount": float(savings),
            "formatted": formatted
        }), 200

    except (InvalidOperation, ValueError, TypeError):
        return jsonify({"error": "Invalid savings amount. Must be a number."}), 400

@app.route("/api/fire", methods=["POST"])
def fire():
    data = request.get_json()
    if not data:
        return jsonify({"error": "No data"}), 400

    try:
        monthly_income = float(data["monthly_income"])
        monthly_expenses = float(data["monthly_expenses"])
        return_rate = float(data.get("return_rate", 0.05))
    except:
        return jsonify({"error": "Invalid input"}), 400

    fire_number, years_to_fire, projections = calculate_fire(
        monthly_income, monthly_expenses, return_rate
    )
    return jsonify(
        {"fire_number": fire_number, "years_to_fire": years_to_fire, "projections": projections}
    )


if __name__ == "__main__":
    app.run(port=8080, debug=True)