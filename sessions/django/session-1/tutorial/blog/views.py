from multiprocessing import context
from django.shortcuts import render

posts = [
    {
        "title": "Blog Post 1",
        "author": "MohamedEmary",
        "content": "First post content",
    },
    {
        "title": "Blog Post 2",
        "author": "MohamedEmary",
        "content": "Second post content",
    },
    {
        "title": "Blog Post 3",
        "author": "MohamedEmary",
        "content": "Third post content",
    },
    {
        "title": "Blog Post 4",
        "author": "MohamedEmary",
        "content": "Fourth post content",
    },
    {
        "title": "Blog Post 5",
        "author": "MohamedEmary",
        "content": "Fifth post content",
    },
    {
        "title": "Blog Post 6",
        "author": "MohamedEmary",
        "content": "Sixth post content",
    },
    {
        "title": "Blog Post 7",
        "author": "MohamedEmary",
        "content": "Seventh post content",
    },
    {
        "title": "Blog Post 8",
        "author": "MohamedEmary",
        "content": "Eighth post content",
    },
    {
        "title": "Blog Post 9",
        "author": "MohamedEmary",
        "content": "Ninth post content",
    },
    {
        "title": "Blog Post 10",
        "author": "MohamedEmary",
        "content": "Tenth post content",
    },
]


# Create your views here.
def home(request):
    context = {"posts": posts}
    return render(request, "blog/home.html", context)


def about(request):
    return render(request, "blog/about.html", {"title": "About"})
