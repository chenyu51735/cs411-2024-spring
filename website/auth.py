from flask import Blueprint, render_template, redirect, url_for, request, flash
from werkzeug.security import check_password_hash
from flask_login import login_user, logout_user, login_required
from .models import User
from . import db
from werkzeug.security import generate_password_hash

auth = Blueprint('auth', __name__)

@auth.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form.get('username')  
        password = request.form.get('password') 

        user = User.query.filter_by(username=username).first()  

        if user and check_password_hash(user.password_hash, password):  
            login_user(user, remember=True) 
            return redirect(url_for('auth.home'))  
        else:
            flash('Please check your login details and try again.')

    return render_template('login.html') 


@auth.route('/logout')
@login_required
def logout():
    logout_user()
    return "<p>Logout</p>"


@auth.route('/sign-up', methods=['GET', 'POST'])
def signup():
    if request.method == 'POST':
        username = request.form.get('username')
        email = request.form.get('email')
        password = request.form.get('password')

        if not password:
            return render_template('sign_up.html', error="Password is required.")
        
        hashed_password = generate_password_hash(password, method='pbkdf2:sha256')

        new_user = User(username=username, email=email, password_hash=hashed_password)
        db.session.add(new_user)
        db.session.commit()

        return redirect(url_for('auth.login'))

    return render_template('sign_up.html')



@auth.route('/home')
def home():
    return render_template("home.html")