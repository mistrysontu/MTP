from flask import Flask, request
import os
from flask_cors import CORS, cross_origin
app = Flask(__name__)
api_v1_cors_config = {
  "origins": ["*"],
  "methods": ["OPTIONS", "GET", "POST"],
}
CORS(app,resources={"/*": api_v1_cors_config})
# cors = CORS(app, resources={r"./data/*": {"origins": "*"}})

@app.route("/api/other_img",methods=["POST"])
def post_Other_img():
    data = request.files.get('pic')
    data.save(os.path.join('data', 'uml.ucls'))
    os.system('python main.py')
    return "Ok 200"

@app.route('/')
def run_script():
    return "Hello, World!"
    pass

if __name__ == "__main__":
    app.run(debug=True)