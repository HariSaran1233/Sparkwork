from flask import render_template

def init_app(app):
    @app.route('/')
    def index():
        return render_template('index.html')

    @app.route('/about')
    def about():
        return render_template('about.html')

    @app.route('/services')
    def services():
        return render_template('services.html')

    @app.route('/portfolio')
    def portfolio():
        return render_template('portfolio.html')

    @app.route('/contact')
    def contact():
        return render_template('contact.html')
