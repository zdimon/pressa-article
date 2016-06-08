from django.shortcuts import render
from django.shortcuts import render_to_response
from django.template import RequestContext

def home_page(request):
    return render_to_response('main/home.html', {}, RequestContext(request))
