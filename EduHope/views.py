from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
from django.urls import reverse
from django.views.decorators.csrf import csrf_exempt
import json

def home(request):
    return render(request, 'home.html')

def about(request):
    return render(request, 'about.html')

def programs(request):
    return render(request, 'programs.html')

def contact(request):
    if request.method == 'POST' and request.headers.get('X-Requested-With') == 'XMLHttpRequest':
        # Handle AJAX contact form submission
        name = request.POST.get('name')
        email = request.POST.get('email')
        subject = request.POST.get('subject')
        message = request.POST.get('message')
        
        # Here you would typically save the contact message to a database
        # and possibly send an email notification
        print(f"Contact form submission from {name} ({email}): {subject} - {message}")
        
        # Simulate success response
        return JsonResponse({
            'status': 'success',
            'message': '✅ Your message has been received! Our team will reach out soon.'
        })
    return render(request, 'contact.html')

def donate(request):
    if request.method == 'POST' and request.headers.get('X-Requested-With') == 'XMLHttpRequest':
        # Handle AJAX donation form submission
        name = request.POST.get('name')
        email = request.POST.get('email')
        amount = request.POST.get('amount')
        message = request.POST.get('message')
        anonymous = request.POST.get('anonymous')
        
        # Here you would typically process the payment and save donation details
        print(f"Donation of ${amount} from {name} ({email}) - Anonymous: {anonymous}")
        if message:
            print(f"Message: {message}")
        
        # Simulate success response
        return JsonResponse({
            'status': 'success',
            'message': '💙 Your donation makes a difference — thank you for your generosity!'
        })
    return render(request, 'donate.html')

def impact(request):
    return render(request, 'impact_demo.html')

def scholarship(request):
    return render(request, 'scholarship.html')

def navbar_demo(request):
    return render(request, 'navbar_demo.html')

def newsletter_subscribe(request):
    if request.method == 'POST':
        # Check if this is an AJAX request
        if request.headers.get('X-Requested-With') == 'XMLHttpRequest':
            email = request.POST.get('email')
            # Here you would typically save the email to a database
            # For now, we'll just simulate the process
            # You can add your newsletter subscription logic here
            print(f"Newsletter subscription request for: {email}")
            
            # Simulate success response
            return JsonResponse({
                'status': 'success',
                'message': '🎉 Thank you for subscribing! We\'ll keep you updated with our latest programs.'
            })
        else:
            # Handle regular form submission
            email = request.POST.get('email')
            # Here you would typically save the email to a database
            # For now, we'll just simulate the process
            print(f"Newsletter subscription request for: {email}")
            
            # Redirect back to the referring page or home page
            return HttpResponseRedirect(request.META.get('HTTP_REFERER', '/'))
    
    # If not a POST request, redirect to home
    return HttpResponseRedirect('/')