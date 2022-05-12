from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import get_object_or_404, render
from .models import Character
from .forms import CharacterForm
from django.urls import reverse

def homePage(request):

    form = CharacterForm()

    if request.method == "POST":
        
        form = CharacterForm(request.POST)
        print(form)

        if form.is_valid():

            form.save()
        
            return HttpResponseRedirect(request.META.get('HTTP_REFERER'))

    return render(request, 'home.html', {'form':form})

def charPage(request):

    allChars = Character.objects.all()
    print(allChars)

    return render(request, 'characters.html', {'char':allChars})

def editPage(request, id):

    form = CharacterForm(request.POST)
    char = Character.objects.get(id=id)

    context = {"item":char, "form":form}

    if request.method == "POST":
        
        toUpdate = Character.objects.get(pk=id)
        form = CharacterForm(request.POST, instance=toUpdate)

        print(form)

        if form.is_valid():

            form.save()
        
            return charPage(request)


    return render(request, 'edit.html', context)

def deletePage(request, id):

    toDelete = Character.objects.get(pk=id)
    toDelete.delete()

    return charPage(request)

# Create your views here.
