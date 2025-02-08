import getpass
from utils import (
    validate_email,
    is_email_registered,
    validate_egyptian_phone,
    hash_password,
    load_data,
    save_data,
)

USER_FILE = "users.json"


# User-related functions
def register_user():
    users = load_data(USER_FILE)
    print("\n--- Registration ---")
    first_name = input("First name: ").strip()
    last_name = input("Last name: ").strip()

    while True:
        email = input("Email: ").strip()

        if not validate_email(email):
            print("Invalid email format. Please try again.")
            continue

        if is_email_registered(email, users):
            print("Email already registered. Please use a different email.")
            continue

        break

    while True:
        mobile_phone = input("Mobile phone (Egyptian number): ").strip()
        if validate_egyptian_phone(mobile_phone):
            break
        print("Enter a Valid Egyptian Mobile Number.")

    password = getpass.getpass("Password: ")  # To hide the password when typing
    while True:
        confirm_password = getpass.getpass("Confirm password: ")
        if password == confirm_password:
            break
        print("Passwords do not match. Please Re-enter your password.")

    password_hash = hash_password(password)
    new_user = {
        "first_name": first_name,
        "last_name": last_name,
        "email": email,
        "password_hash": password_hash,
        "mobile_phone": mobile_phone,
    }
    users.append(new_user)
    save_data(users, USER_FILE)
    print("Registration successful. You can now login.")


def login_user():
    users = load_data(USER_FILE)
    print("\n--- Login ---")
    email = input("Email: ").strip()
    password = getpass.getpass("Password: ")
    password_hash = hash_password(password)

    for user in users:
        if user["email"] == email and user["password_hash"] == password_hash:
            print("Login successful.")
            return user

    print("Invalid email or password.")
    return None
