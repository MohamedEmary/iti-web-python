from flask import Flask, current_app, render_template, request

app = Flask(__name__)


@app.route("/")
def root():
    """
    Purpose: Displays root page
    """
    return "<h1>hello world</h1>"


@app.route("/login")
def login():
    """
    Purpose: Displays login page
    """
    return "<h1>Login page</h1>"


@app.route("/user/<name>", methods=["GET", "POST"])
def getName(name):
    """
    Purpose: Displays name page
    """
    users = {
        "mohamed": "mohamed@iti.com",
        "ahmed": "ahmed@iti.com",
        "mahmoud": "mahmoud@iti.com",
    }

    if request.method == "GET":
        return f"<h1>Hello {name}</h1>"
    elif request.method == "POST":
        if name in users:
            return f"<h1>Welcome back {name}</h1>"
        else:
            return f"<h1>Welcome Unknown user {name}</h1>"
    return f"<h1>Method not allowed</h1>"


@app.route("/template/<name>")
def template(name):
    """
    Purpose: Displays template page
    """
    return render_template("index.html", name=name, current_app=current_app)
