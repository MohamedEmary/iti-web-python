import uuid
from datetime import datetime
from utils import validate_date, load_data, save_data

PROJECT_FILE = "projects.json"


def create_project(current_user_email):
    projects = load_data(PROJECT_FILE)
    print("\n--- Create Project ---")
    title = input("Title: ").strip()
    details = input("Details: ").strip()

    try:
        total_target = float(input("Total target (EGP): ").strip())
        if total_target <= 0:
            print("Total target must be a positive number.")
            return
    except ValueError:
        print("Invalid total target. Must be a number.")
        return

    start_date = input("Start date (YYYY-MM-DD): ").strip()
    if not validate_date(start_date):
        print("Invalid start date format.")
        return

    end_date = input("End date (YYYY-MM-DD): ").strip()
    if not validate_date(end_date):
        print("Invalid end date format.")
        return

    start_dt = datetime.strptime(start_date, "%Y-%m-%d")
    end_dt = datetime.strptime(end_date, "%Y-%m-%d")
    if end_dt <= start_dt:
        print("End date must be after start date.")
        return

    project_id = str(uuid.uuid4())
    new_project = {
        "id": project_id,
        "title": title,
        "details": details,
        "total_target": total_target,
        "start_date": start_date,
        "end_date": end_date,
        "owner_email": current_user_email,
    }
    projects.append(new_project)
    save_data(projects, PROJECT_FILE)
    print("Project created successfully.")


def view_all_projects():
    projects = load_data(PROJECT_FILE)
    print("\n--- All Projects ---")
    if not projects:
        print("No projects found.")
        return
    for idx, project in enumerate(projects, 1):
        print(f"{idx}. Title: {project['title']}")
        print(f"   Details: {project['details']}")
        print(f"   Target: {project['total_target']} EGP")
        print(f"   Start: {project['start_date']}, End: {project['end_date']}")
        print(f"   Owner: {project['owner_email']}")
        print("-----------------------")


def edit_project(current_user_email):
    projects = load_data(PROJECT_FILE)
    user_projects = [p for p in projects if p["owner_email"] == current_user_email]
    if not user_projects:
        print("You have no projects to edit.")
        return

    print("\n--- Your Projects ---")
    for idx, p in enumerate(user_projects, 1):
        print(f"{idx}. {p['title']} (ID: {p['id']})")

    try:
        choice = int(input("Select project to edit (number): "))
        if choice < 1 or choice > len(user_projects):
            print("Invalid selection.")
            return
        selected_project = user_projects[choice - 1]

        for p in projects:
            if p["id"] == selected_project["id"]:
                print("\nEditing project. Leave field blank to keep current value.")
                new_title = input(f"New title ({p['title']}): ").strip()
                if new_title:
                    p["title"] = new_title

                new_details = input(f"New details ({p['details']}): ").strip()
                if new_details:
                    p["details"] = new_details

                new_total_target = input(
                    f"New target (current: {p['total_target']} EGP): "
                ).strip()
                if new_total_target:
                    try:
                        new_total_target = float(new_total_target)
                        if new_total_target > 0:
                            p["total_target"] = new_total_target
                        else:
                            print("Target must be positive. Keeping current value.")
                    except ValueError:
                        print("Invalid target. Keeping current value.")

                new_start_date = input(f"New start date ({p['start_date']}): ").strip()
                if new_start_date:
                    if validate_date(new_start_date):
                        new_start_dt = datetime.strptime(new_start_date, "%Y-%m-%d")
                        current_end_dt = datetime.strptime(p["end_date"], "%Y-%m-%d")
                        if new_start_dt < current_end_dt:
                            p["start_date"] = new_start_date
                        else:
                            print(
                                "Start date must be before end date. Keeping current start date."
                            )
                    else:
                        print("Invalid date format. Keeping current start date.")

                new_end_date = input(f"New end date ({p['end_date']}): ").strip()
                if new_end_date:
                    if validate_date(new_end_date):
                        new_end_dt = datetime.strptime(new_end_date, "%Y-%m-%d")
                        current_start_dt = datetime.strptime(
                            p["start_date"], "%Y-%m-%d"
                        )
                        if new_end_dt > current_start_dt:
                            p["end_date"] = new_end_date
                        else:
                            print(
                                "End date must be after start date. Keeping current end date."
                            )
                    else:
                        print("Invalid date format. Keeping current end date.")

                save_data(projects, PROJECT_FILE)
                print("Project updated successfully.")
                return
        print("Project not found.")
    except ValueError:
        print("Invalid input. Please enter a number.")


def delete_project(current_user_email):
    projects = load_data(PROJECT_FILE)
    user_projects = [p for p in projects if p["owner_email"] == current_user_email]
    if not user_projects:
        print("You have no projects to delete.")
        return

    print("\n--- Your Projects ---")
    for idx, p in enumerate(user_projects, 1):
        print(f"{idx}. {p['title']} (ID: {p['id']})")

    try:
        choice = int(input("Select project to delete (number): "))
        if choice < 1 or choice > len(user_projects):
            print("Invalid selection.")
            return
        selected_project = user_projects[choice - 1]
        confirm = (
            input(
                f"Are you sure you want to delete '{selected_project['title']}'? (y/n): "
            )
            .strip()
            .lower()
        )

        if confirm == "y":
            projects = [p for p in projects if p["id"] != selected_project["id"]]
            save_data(projects, PROJECT_FILE)
            print("Project deleted successfully.")
        else:
            print("Deletion cancelled.")
    except ValueError:
        print("Invalid input. Please enter a number.")


def search_projects_by_date():
    date_str = input("Enter date to search (YYYY-MM-DD): ").strip()
    if not validate_date(date_str):
        print("Invalid date format.")
        return

    target_date = datetime.strptime(date_str, "%Y-%m-%d")
    projects = load_data(PROJECT_FILE)
    found_projects = []

    for p in projects:
        start_date = datetime.strptime(p["start_date"], "%Y-%m-%d")
        end_date = datetime.strptime(p["end_date"], "%Y-%m-%d")
        if start_date <= target_date <= end_date:
            found_projects.append(p)

    if not found_projects:
        print("No projects found for this date.")
        return

    print("\n--- Found Projects ---")
    for p in found_projects:
        print(f"Title: {p['title']}")
        print(f"Details: {p['details']}")
        print(f"Target: {p['total_target']} EGP")
        print(f"Start: {p['start_date']}, End: {p['end_date']}")
        print(f"Owner: {p['owner_email']}")
        print("-----------------------")


def view_user_projects(current_user_email):
    projects = load_data(PROJECT_FILE)
    user_projects = [p for p in projects if p["owner_email"] == current_user_email]
    print("\n--- Your Projects ---")
    if not user_projects:
        print("You have no projects.")
        return
    for idx, project in enumerate(user_projects, 1):
        print(f"{idx}. Title: {project['title']}")
        print(f"   Details: {project['details']}")
        print(f"   Target: {project['total_target']} EGP")
        print(f"   Start: {project['start_date']}, End: {project['end_date']}")
        print("-----------------------")
