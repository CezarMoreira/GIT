from django.shortcuts import render

# Create your views here.


def pagina(request):
    return render(request, 'pagina/home.html')
