from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_admin import Admin


import pymysql
pymysql.install_as_MySQLdb()
from app import app

db = SQLAlchemy(app)
migrate = Migrate(app, db)

admin = Admin(app, name='YeloBank', template_mode='bootstrap3')