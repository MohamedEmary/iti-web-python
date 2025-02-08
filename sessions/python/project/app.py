from auth import register_user, login_user
from projects import (
    create_project,
    view_all_projects,
    view_user_projects,
    edit_project,
    delete_project,
    search_projects_by_date,
)


def main():
    current_user = None
    while True:
        if not current_user:
            print("\n--- Main Menu ---")
            print("1. Register")
            print("2. Login")
            print("3. Exit")
            choice = input("Enter your choice: ").strip()

            if choice == "1":
                register_user()
            elif choice == "2":
                user = login_user()
                if user:
                    current_user = user
            elif choice == "3":
                print("Exiting...")
                break
            else:
                print("Invalid choice. Please enter 1, 2, or 3.")
        else:
            print("\n--- Project Menu ---")
            print("1. Create Project")
            print("2. View All Projects")
            print("3. View My Projects")
            print("4. Edit Project")
            print("5. Delete Project")
            print("6. Search Projects by Date")
            print("7. Logout")
            choice = input("Enter your choice: ").strip()

            if choice == "1":
                create_project(current_user["email"])
            elif choice == "2":
                view_all_projects()
            elif choice == "3":
                view_user_projects(current_user["email"])
            elif choice == "4":
                edit_project(current_user["email"])
            elif choice == "5":
                delete_project(current_user["email"])
            elif choice == "6":
                search_projects_by_date()
            elif choice == "7":
                current_user = None
                print("Logged out.")
            else:
                print("Invalid choice. Please enter 1-7.")


if __name__ == "__main__":
    main()
