from flask import Flask
from flask_cors import CORS
from routes import routes
from scheduler import start_scheduler

app = Flask(__name__)

CORS(app)

app.register_blueprint(routes)

# start automatic weather collection
start_scheduler()

if __name__ == "__main__":
    app.run(debug=True)