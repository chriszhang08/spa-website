from email.mime.image import MIMEImage

from flask import Flask, request, jsonify, json
import smtplib, ssl
from email.mime.text import MIMEText
from email.mime.base import MIMEBase
from email.mime.multipart import MIMEMultipart
from email import encoders

app = Flask(__name__)

@app.route("/api/python")
def hello_world():
    return "<p>Hello, World!</p>"

# define another path where we can post the results of a form
@app.route("/api/booknow", methods=['POST'])
def customer_info():
    name = request.form.get('name')
    email = request.form.get('email')
    number = request.form.get('number')
    service = request.form.get('service')
    photo = request.files['photoId']
    if photo.filename == '':
        return 'No file selected', 400

    # Save the file or perform any desired operations
    filename = '/Users/chris/Documents/CS/massage-com/public/photoid.jpg'
    photo.save(filename)
    attachment = open(filename, 'rb')

    # Configure email settings
    sender_email = 'czhang2003@gmail.com'
    sender_password = 'tzvsyybnybntvdnu'
    receiver_email = email
    subject = 'Hello from Flask API'
    message = str(number) + str(name) + str(service)

    # Create a multipart message
    msg = MIMEMultipart()
    msg['From'] = sender_email
    msg['To'] = receiver_email
    msg['Subject'] = subject

    # Attach the message to the email
    msg.attach(MIMEText(message, 'plain'))

    msgImage = MIMEImage(attachment.read())
    attachment.close()
    msgImage.add_header('Content-ID', '<image1>')
    msg.attach(msgImage)

    port = 465  # For SSL

    # Create a secure SSL context
    context = ssl.create_default_context()

    try:
        with smtplib.SMTP_SSL("smtp.gmail.com", port, context=context) as server:
            server.login(sender_email, sender_password)
            server.send_message(msg)
            server.quit()
            return jsonify({'message': 'Email sent successfully'}, 200)
    except Exception as e:
        return jsonify({'error': str(e)}), 500


if __name__ == '__main__':
    app.run()
