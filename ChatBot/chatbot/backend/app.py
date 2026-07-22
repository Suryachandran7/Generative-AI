from flask import Flask, request, jsonify
from flask_cors import CORS
from database import get_connection
import bcrypt

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return jsonify({"message": "Backend Running Successfully"})

@app.route("/register", methods=["POST"])
def register():

    data = request.get_json()

    name = data["name"]
    email = data["email"]
    mobile = data["mobile"]
    password = data["password"]

    conn = get_connection()
    cursor = conn.cursor()

    # Check whether the email already exists
    cursor.execute(
        "SELECT id FROM users WHERE email=%s",
        (email,)
    )

    if cursor.fetchone():
        cursor.close()
        conn.close()
        return jsonify({
            "success": False,
            "message": "Email already exists"
        }), 400

    # Encrypt the password
    hashed_password = bcrypt.hashpw(
        password.encode("utf-8"),
        bcrypt.gensalt()
    ).decode("utf-8")

    cursor.execute(
        """
        INSERT INTO users
        (name, email, mobile, password)
        VALUES (%s, %s, %s, %s)
        """,
        (name, email, mobile, hashed_password)
    )

    conn.commit()

    cursor.close()
    conn.close()

    return jsonify({
        "success": True,
        "message": "User Registered Successfully"
    })

if __name__ == "__main__":
    app.run(debug=True)