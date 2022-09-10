from flask import redirect, render_template, request
from app import app
from models import*
import requests
import xmltodict
import datetime


@app.route("/")
def homepage():
    all_news = News.query.limit(3).all()
    url = f'https://www.cbar.az/currencies/{datetime.datetime.now().strftime("%d.%m.%Y")}.xml'
    response = requests.get(url)
    dict_data = xmltodict.parse(response.content)
    USD = dict_data["ValCurs"]["ValType"][1]["Valute"][0]["Value"]
    EUR = dict_data["ValCurs"]["ValType"][1]["Valute"][1]["Value"]
    return render_template("homepage.html", all_news = all_news, dollar = USD, euro = EUR)
            

@app.route("/news/")
def newspage():
    all_news = News.query.all()
    all_news_limited = News.query.limit(6).all()
    return render_template("news.html",all_news = all_news, all_news_limited= all_news_limited)


@app.route("/news/<string:slug_field>")
def detailed_page(slug_field):
    news = News.query.filter_by(slug_field = slug_field).first()
    return render_template("detailed_news.html", news = news)

# @app.route("/add/news", methods=["POST"])
# def create_news():
#     news_data = request.form
#     news = News(title=news_data.get("title"),describtion=news_data.get("describtion"))
#     db.session.add(news)
#     db.session.commit()
#     return redirect(f"/news/{news.slug_field}")

