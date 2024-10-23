from flask import Flask
from flask_restful import Resource, Api
from flask_cors import CORS

app = Flask(__name__)
api = Api(app)
CORS(app)

class Main(Resource):
    def get(self):
        return "Event Tracking API", 200

# test route
@app.route("/test")
def home():
    return 'success', 200

if __name__ == '__main__':
    app.run(port=8080, debug=True)