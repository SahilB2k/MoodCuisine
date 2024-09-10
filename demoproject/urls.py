"""
URL configuration for demoproject project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import include, path
from demoproject import views

urlpatterns = [
    # path('', include('create.urls')),
    path('home/', views.homepage, name="home"),
    # path('login/homepage.html', views.homepage),
    path('admin/', admin.site.urls),
    path('aboutus/',views.aboutus ,name="aboutus"),
    path('userform/',views.Userform),
    path('happy/',views.happy),
    path('login/',views.signin, name="login"),
    path('submitform/',views.submitform,name="submitform"),
    path('quiz-page/',views.quizpage),
    path('quiz-page1/',views.quizpage1),
    path('sign-up/',views.signup,name="signin"),
    path('mood-page/',views.moodpage),
    path('start-quiz/',views.startquiz),
    path('course/<courseid>',views.courseDetails),
]
