from flask_admin.contrib.sqla import ModelView


class NewsAdmin(ModelView):
        can_view_details= True
        column_exclude_list = ["describtion"]