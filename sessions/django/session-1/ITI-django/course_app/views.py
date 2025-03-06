from django.shortcuts import render, redirect

# Simulated in-memory database for courses
courses = []

def course_list(request):
    return render(request, 'course/course_list.html', {'courses': courses})

def add_course(request):
    if request.method == 'POST':
        name = request.POST['name']
        courses.append({'id': len(courses) + 1, 'name': name})  # Assign a unique ID
        return redirect('course_list')
    return render(request, 'course/add_course.html')

def update_course(request, id):
    course = next((c for c in courses if c['id'] == id), None)
    if not course:
        return redirect('course_list')

    if request.method == 'POST':
        course['name'] = request.POST['name']
        return redirect('course_list')

    return render(request, 'course/update_course.html', {'course': course})

def delete_course(request, id):
    global courses
    courses = [c for c in courses if c['id'] != id]
    return redirect('course_list')
