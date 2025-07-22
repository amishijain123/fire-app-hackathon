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

# Run app
if __name__ == "__main__":
    app.run(port=8080, debug=True)