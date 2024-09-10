from turtle import home
from django.http import HttpResponse,HttpResponsePermanentRedirect
from django.shortcuts import render,redirect
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from django.utils.deprecation import MiddlewareMixin
from django.views.decorators.cache import never_cache
# --------------------------------------------------------------
# views.py
# ------------------------

from django.contrib.auth import authenticate,login,logout
from django.contrib import messages



# from ..create.forms import usersform


def homepage(request):
    data={
        'tittle':"NEW PAGE",
        'clist':['PHP','Django','Python'],
        'numbers':['10','20','30','40','50','60'],
        'studentDetails':[
            {'name':'Sahil','phone':'8374826473'},
            {'name':'Anuj','phone':'73627827363'}
        ]
    }
    return render(request,"homepage.html",data)


class CustomUserCreationForm(UserCreationForm):
    class Meta(UserCreationForm.Meta):
        model = User

    def clean_email(self):
        email = self.cleaned_data.get('email')
        # Custom validation logic goes here, or simply return email
        return email

def signup(request):
    if request.method =="POST":
        
        Username=request.POST['username']
        fname=request.POST['fname']
        lname=request.POST['lname']
        Email=request.POST['email']
        pass1=request.POST['pass']
        myuser=User.objects.create_user(Username,Email,pass1)
        myuser.first_name=fname
        myuser.last_name=lname
        myuser.save()
        messages.success(request,"Your Account has been succesfully created")
        return redirect('/login')
        
    return render(request,"signup.html")

def signin(request):
    if request.method=='POST':
        username=request.POST['username']
        pass1=request.POST['pass1']

        user = authenticate(username=username,password=pass1)

        if user is not None:
            login(request,user)
            fname=user.first_name
            
            return render(request,"homepage.html",{'fname':fname})
        else:
           
           messages.error(request,"Bad Credentials")
           return render(request, "login.html")
        


    # return redirect('home')
    return render(request,"login.html")     

# class NoCacheMiddleware(MiddlewareMixin):
#     def signout(request):
#         logout(request)
#         messages.success(request,"Logged out Succesfully!")
#         response = HttpResponse()
#         response['Cache-Control'] = 'no-cache, no-store, must-revalidate'
#         response['Pragma'] = 'no-cache'
#         response['Expires'] = '0'
#         return redirect('login')

def signout(request):
    messages.success(request, "Logged out Successfully!")
    response = HttpResponse()
    response['Cache-Control'] = 'no-cache, no-store, must-revalidate'
    response['Pragma'] = 'no-cache'
    response['Expires'] = '0'
    logout(request)
    return redirect('login')


    
def Userform(request):
    # finalans=0;
    # fn=usersform()
    # data={'form':fn}
    # try:
    #      n1=int(request.GET.get('num1'))
    #      n2=int(request.GET.get('num2'))
    #      finalans=n1+n2  
    #      data={
    #         #  'n1':n1,
    #         #  'n2':n2,
    #          'form':fn,
    #          'output':finalans
    #          }
         
    #      return HttpResponse(request)
    # except:
    #     pass
    return render(request,"abc.html")

def startquiz(request):
    return render(request,"startquiz.html")
def moodpage(request):
    return render(request,"moodpage.html")
def submitform(request):
    return HttpResponse(request)
def quizpage(request):
    return render(request,"quizpage.html")
def quizpage1(request):
    return render(request,"quiz2.html")
# def login(request):
#     return render(request,"login.html")
def happy(request):
    return render(request,"happy.html")
def aboutus(request):
    return render(request,"aboutus.html")
def course(request):
    return HttpResponse("<h1>Hello!! , this is the course page</h1>")
def courseDetails(request,courseid):
    return HttpResponse(f"<h1>Hello!! , this is the {courseid}th course page</h1>")
