# Backend
Backend made with Django REST.

Create virtual environment (if haven't already)
```python -m venv venv```

Always activate virtual environment
```source venv/bin/activate``` (mac) ```.\venv\Scripts\activate```(windows)

Download necessary packages
```pip install -r requirements.txt```

Make migrations
```python manage.py migrate```

Create a document named ".env", put the following in the contents \\
```GOOGLE_OAUTH2_CLIENT_ID=<yourAPIKEY>```

Then runserver
```python manage.py runserver```
