from django.shortcuts import render

# Create your views here.
# views.py

from django.shortcuts import render, redirect
from .forms import FoodItemForm

def create_food_item(request):
    if request.method == 'POST':
        form = FoodItemForm(request.POST)
        if form.is_valid():
            form.save()  # Save the form data to the database
            return redirect('success_page')  # Redirect to a success page
    else:
        form = FoodItemForm()
    return render(request, 'create_food_item.html', {'form': form})
