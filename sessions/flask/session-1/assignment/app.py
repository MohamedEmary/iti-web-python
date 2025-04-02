from flask import Flask, render_template

app = Flask(__name__)


@app.route("/jobs")
def jobs():
    jobs = [
        {
            "id": 1,
            "title": "Software Engineer",
            "company": "Vodafone",
            "location": "Smart Village",
        },
        {
            "id": 2,
            "title": "FrontEnd Engineer",
            "company": "DXC",
            "location": "Smart Village",
        },
        {"id": 3, "title": "BackEnd Engineer", "company": "PWC", "location": "Tagamoa"},
        {
            "id": 4,
            "title": "Mobile App Developer",
            "company": "b_labs",
            "location": "Qattamia",
        },
    ]

    return render_template("jobs.html", jobs=jobs)


# Job Details Page (add job (name, discription, needed experience,  salary, type(fultime or part)))
# company Details page (company name, discrption, employees count)


@app.route("/jobs/<job_id>")
def job_details(job_id):
    jobs = [
        {
            "id": 1,
            "title": "Software Engineer",
            "company": "Vodafone",
            "location": "Smart Village",
            "description": "Develop and maintain software applications.",
            "experience": "2+ years",
            "salary": "$60,000 - $80,000",
            "type": "Full-time",
        },
        {
            "id": 2,
            "title": "FrontEnd Engineer",
            "company": "DXC",
            "location": "Smart Village",
            "description": "Build user interfaces and improve user experience.",
            "experience": "3+ years",
            "salary": "$50,000 - $70,000",
            "type": "Full-time",
        },
        {
            "id": 3,
            "title": "BackEnd Engineer",
            "company": "PWC",
            "location": "Tagamoa",
            "description": "Develop server-side logic and database management.",
            "experience": "4+ years",
            "salary": "$70,000 - $90,000",
            "type": "Full-time",
        },
        {
            "id": 4,
            "title": "Mobile App Developer",
            "company": "b_labs",
            "location": "Qattamia",
            "description": "Create mobile applications for iOS and Android.",
            "experience": "2+ years",
            "salary": "$55,000 - $75,000",
            "type": "Full-time",
        },
    ]

    job = None
    for j in jobs:
        if j["id"] == int(job_id):
            job = j
            break

    if job is None:
        return "Job not found", 404

    return render_template("job_details.html", job=job)


@app.route("/company/<company_id>")
def company_details(company_id):
    companies = [
        {
            "id": 1,
            "name": "Vodafone",
            "description": "A global telecommunications company.",
            "employees_count": 1000,
            "Industry": "Telecommunications",
            "location": "Smart Village",
            "website": "www.vodafone.com",
            "founded": 1984,
        },
        {
            "id": 2,
            "name": "DXC",
            "description": "A global IT services company.",
            "employees_count": 5000,
            "Industry": "IT Services",
            "location": "Smart Village",
            "website": "www.dxc.com",
            "founded": 2017,
        },
        {
            "id": 3,
            "name": "PWC",
            "description": "A multinational professional services network.",
            "employees_count": 250000,
            "Industry": "Professional Services",
            "location": "Tagamoa",
            "website": "www.pwc.com",
            "founded": 1998,
        },
        {
            "id": 4,
            "name": "b_labs",
            "description": "A technology company specializing in mobile apps.",
            "employees_count": 200,
            "Industry": "Technology",
            "location": "Qattamia",
            "website": "www.blabs.com",
            "founded": 2015,
        },
    ]

    company = None
    for j in companies:
        if j["id"] == int(company_id):
            company = j
            break

    if company is None:
        return "Company not found", 404
    else:
        return render_template("company_details.html", company=company)
