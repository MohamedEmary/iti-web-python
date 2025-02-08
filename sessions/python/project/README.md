<!--
TODO: Add a part about the sample users and projects json file
    mention that the hashed passwords are `mohamed` and `ahmed`
  -->

# Crowdfunding Console Application

A Python-based console application for managing crowdfunding projects with user authentication.

## Features

- **User Management**

  - User registration with validation
  - Secure login system
  - Egyptian phone number validation
  - Email validation
  - Password hashing for security

- **Project Management**
  - Create new projects
  - View all projects
  - View user-specific projects
  - Edit existing projects
  - Delete projects
  - Search projects by date

## File Structure

- `app.py`: Main application entry point
- `auth.py`: Authentication related functions
- `projects.py`: Project management functions
- `utils.py`: Utility functions and helpers
- `users.json`: User data storage
- `projects.json`: Project data storage

## Installation

No external packages are required. The application uses Python's standard library.

```bash
python app.py
```

## Usage

1. Start the application by running

```bash
python app.py
```

2. Choose from the main menu:

   - Register a new account
   - Login to existing account
   - Exit

3. After login, access project management features:

   - Create new projects
   - View all projects
   - View your projects
   - Edit your projects
   - Delete your projects
   - Search projects by date
   - Logout

### Standard Library Modules

- `json`: Data storage and retrieval
- `datetime`: Date validation and handling
- `re`: Regular expressions for validation
- `hashlib`: Password hashing (SHA-256)
- `getpass`: Secure password input
- `os`: File operations and path handling

## Data Validation

- Email format validation
- Egyptian phone number validation
- Date format validation (YYYY-MM-DD)
- Project date range validation
- Project target amount validation

## Data Storage

- User data is stored in JSON format
- Project data is stored in JSON format
- Passwords are stored as SHA-256 hashes

## Author

This crowdfunding console application was created as a final project for ITI python web development course.
