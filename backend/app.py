import os

from dotenv import load_dotenv
from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route("/api/ping", methods=["GET"])
def ping():
    return jsonify({"message": "pong"}), 200


if __name__ == "__main__":
    app.run(port=8080, debug=True)
