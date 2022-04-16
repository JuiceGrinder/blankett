from urllib import request
from flask import Flask, jsonify, request, json
from flask_sqlalchemy import SQLAlchemy
app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///blankett.db"
db = SQLAlchemy(app)

class LINK(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Text, primary_key=False)
    url = db.Column(db.Text, primary_key=False)
    #icon = db.Column(db.Text, primary_key=False)

    link_group_header = db.Column(db.Text, db.ForeignKey('LINK_GROUPS.header'), nullable=False)

    def __str__(self):
        return f'{self.id} {self.title}'

class LINK_GROUPS(db.Model):
    header = db.Column(db.Text, primary_key=True)
    bookmarkGroup = db.Column(db.Boolean, default=False, primary_key=False)
    links = db.relationship('LINK', backref='links')

    def __str__(self):
        return f'{self.header}'

db.create_all()


def link_serializer(link):
    return {
        'id': link.id,
        'name': link.name,
        'url': link.url,
    }

def link_group_serializer(group):
    if(group.links):
        links = [link_serializer(link) for link in group.links]
    return {
        'header': group.header,
        'links': links
    }

@app.route('/loadGroups', methods = ['GET'])
def loadGroups():
    test = list(map(link_group_serializer, LINK_GROUPS.query.all()));
    new = {};
    #Temporary fix till i look into returning directorys properly in python
    for x in test:
        print(x['header'])
        new[x['header']] = x
    return jsonify(new)
    #return jsonify([*map(link_group_serializer, LINK_GROUPS.query.all())])

# @app.route('/initApplication', methods = ['POST'])
# def initApplication():
#     request_data = json.loads(request.data)
#     print(request_data)
#     application = applications(
#         title=request_data['title'],
#         link=request_data['link'],
#         application_group_id=request_data['applicationGroupId'])

#     db.session.add(application)
#     db.session.commit()

#     return {'201': 'Application Init Sucessful'}


if __name__ == '__main__':
    app.run(debug=True)