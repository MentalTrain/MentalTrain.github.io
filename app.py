import json
import requests
from flask import Flask, render_template, jsonify
import pandas as pd



app = Flask(__name__, static_url_path='/static')

@app.route("/")
def index():
    return render_template("index.html")
@app.route("/miserables.json")
def data():
    json_data = open("is_cooccurrence.json")
    data = json.load(json_data)
    return jsonify(data)

@app.route("/aq_cooccurrence.json")
def data2():
    json_data = open("aq_cooccurrence.json")
    data = json.load(json_data)
    return jsonify(data)
 
if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=9999)
