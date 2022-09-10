from extensions import *
import datetime 
from slugify import slugify
from admin import NewsAdmin
# from urllib.parse import quote
# from webhelpers.text import urlify



class News(db.Model):
        __tablename__ = "news"
        id = db.Column(db.Integer, primary_key = True)
        title = db.Column(db.String(255), nullable=False)
        slug_field = db.Column(db.String(255), nullable=True)
        date = db.Column(db.String(20))
        describtion = db.Column(db.Text, nullable=False)
        image_url = db.Column(db.String(255))
        created_at=db.Column(db.Date(), default = datetime.date.today())
        updated_at=db.Column(db.Date(), default = datetime.date.today())

        def __repr__(self):
                return self.title  


        # def __init__(self, *args, **kwargs):
        #         if not 'slug_field' in kwargs:
        #                 kwargs['slug_field'] = slugify(kwargs.get('title', ''))
        #         super().__init__(*args, **kwargs)

        # # def __init__(self,title,describtion,slug_field):
        # #         self.title = title
        # #         self.describtion=describtion
        # #         self.slug_field = slugify(self.title)
               
      
        # def save(self, *args, **kwargs):
        #         db.session.add(self)
        #         db.session.commit()
        #         self.slug_field = slugify(self.title)
        #         super(News, self).save(*args, **kwargs)

               

        def __init__(self,title, slug_field,date,describtion, image_url):
                self.title = title
                self.slug_field=slug_field
                self.date = date
                self.describtion=describtion
                self.image_url=image_url
                
        def save(self):
                db.session.add(self)
                db.session.commit()

        

admin.add_view(NewsAdmin(News, db.session))
