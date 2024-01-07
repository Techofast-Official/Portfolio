from flask import Flask,render_template,url_for,request,redirect
from flask import flash
import csv
import re,random
app = Flask(__name__)
app.config['SECRET_KEY']= "my super secret key"




@app.route('/')
def my_home():
    return render_template("index.html")

@app.route('/<string:page_name>')
def html_page(page_name):
    return render_template(page_name)
def write_to_csv(data):
    with open("database.csv",mode='a',newline='') as database:
        name=data["name"]
        email=data["email"]
        pattern="[a-zA-Z\D\s]{3,20}"
        p = re.compile(pattern)
        if re.fullmatch(p, name): 
            pattern_email="([a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)"
            p_email = re.compile(pattern_email)
        if re.fullmatch(p_email, email):
            project=data["project"]
            message=data["message"]    
        csv_writer=csv.writer(database,delimiter=',',quotechar='"', quoting=csv.QUOTE_MINIMAL)
        csv_writer.writerow([name,email,project,message])
      
            


    
    
@app.route('/submit_form', methods=['POST', 'GET'])
def submit_form():
    if request.method=="POST":
        try:
            data=request.form.to_dict()
            write_to_csv(data)
            flash(random.choice(["धन्यवाद","Gracias","Thank You","Teşekkürler"]),"success")
            return redirect("/#form")
        except:
            flash("Please use","warning")
            return redirect("/#form")
    else:
        flash("Something went wrong,","danger")
        return redirect("/#form")
       