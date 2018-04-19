# Vuetify+Django Boilerplate

This is a template with vue,vuetify and django to create beautiful Single Page Applications(SPA). This template is configured with Webpack and npm. Configuring Vue+Vuetify+Webpack with Django was a challenging task and time consuming. This Boilerplate makes the work easy and helps to concentrate not in configuring your project for SPA but to developing it.

## Installation

Create a virtual environment in your computer and navigate inside the directory. Initialize your project with git by typing the below command in your terminal:

```
git init
```

Now add and commit your project:

```
$ git add .
$ git commit -m "initial project version"
```

Next step is to clone the github repository in your directory by running the command in the terminal

```
git clone https://github.com/fazleerabby/vuetify-django-boilerplate.git
```


After cloning the project install all requirements in your virtual environment:
```
pip install -r requirements.txt
```

Now inside your src directory run these two commands:

```
$ npm install
$ npm run build
```

Then paste your unique secret key inside config/settings.py file.

Finally run your Django server:

```
python manage.py runserver
```

and run it in the browser to see if its working fine:
`localhost:8000`

