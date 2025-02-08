import re
import json
import hashlib
from datetime import datetime


# Validation functions
def validate_egyptian_phone(number):
    pattern = r"^01[0-2|5]{1}[0-9]{8}$"
    return re.match(pattern, number) is not None


def validate_email(email):
    pattern = r"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
    return re.match(pattern, email) is not None


def validate_date(date_str):
    try:
        datetime.strptime(date_str, "%Y-%m-%d")
        return True
    except ValueError:
        return False


def is_email_registered(email, users):
    return any(user["email"] == email for user in users)


# Password hashing
def hash_password(password):
    return hashlib.sha256(password.encode()).hexdigest()


# File operations
def load_data(filename):
    try:
        with open(filename, "r") as f:
            return json.load(f)
    except (FileNotFoundError, json.JSONDecodeError):
        return []


def save_data(data, filename):
    with open(filename, "w") as f:
        json.dump(data, f, indent=4)
