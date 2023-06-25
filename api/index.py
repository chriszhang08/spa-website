from flask import Flask, request, jsonify, json
import smtplib, ssl
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

app = Flask(__name__)

@app.route("/api/python")
def hello_world():
    return "<p>Hello, World!</p>"

# define another path where we can post the results of a form
@app.route("/api/booknow", methods=['POST'])
def customer_info():
    name = request.form.get('name')
    email = request.json['email']
    number = request.json['number']
    # Configure email settings
    sender_email = 'cz20007016@gmail.com'
    sender_password = 'Epic Man 1'
    receiver_email = 'czhang2003@gmail.com'
    subject = 'Hello from Flask API'
    message = number

    # Create a multipart message
    msg = MIMEMultipart()
    msg['From'] = sender_email
    msg['To'] = receiver_email
    msg['Subject'] = subject

    # Attach the message to the email
    msg.attach(MIMEText(message, 'plain'))

    print(msg)

    port = 465  # For SSL

    # Create a secure SSL context
    context = ssl.create_default_context()

    with smtplib.SMTP_SSL("smtp.gmail.com", port, context=context) as server:
        server.login("cz20007016@gmail.com", sender_password)
        # TODO: Send email here
        server.quit()

    return jsonify({'message': 'Email sent successfully'})

    # try:
    #     # Send the email using SMTP server
    #     with smtplib.SMTP('smtp.gmail.com', 587) as server:
    #         server.starttls()
    #         server.login(sender_email, sender_password)
    #         server.send_message(msg)
    #         server.quit()
    #     return jsonify({'message': 'Email sent successfully'})
    # except Exception as e:
    #     return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run()
