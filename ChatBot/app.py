from flask import Flask,request,jsonify

app=Flask(__name__)

@app.route("/sendotp",methods=["POST"])
def sendotp():

    mobile=request.json["mobile"]

    print(mobile)

    return jsonify({
        "status":"OTP Sent"
    })


@app.route("/verifyotp",methods=["POST"])
def verifyotp():

    return jsonify({
        "status":"Verified"
    })

app.run()