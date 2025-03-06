from django.shortcuts import render, redirect

# Simulated in-memory database for trainees
trainees = []

def trainee_list(request):
    return render(request, 'trainee/trainee_list.html', {'trainees': trainees})

def add_trainee(request):
    if request.method == 'POST':
        name = request.POST['name']
        trainees.append({'id': len(trainees) + 1, 'name': name})  # Assign a unique ID
        return redirect('trainee_list')
    return render(request, 'trainee/add_trainee.html')

def update_trainee(request, id):
    trainee = next((t for t in trainees if t['id'] == id), None)
    if not trainee:
        return redirect('trainee_list')

    if request.method == 'POST':
        trainee['name'] = request.POST['name']
        return redirect('trainee_list')

    return render(request, 'trainee/update_trainee.html', {'trainee': trainee})

def delete_trainee(request, id):
    global trainees
    trainees = [t for t in trainees if t['id'] != id]
    return redirect('trainee_list')
            