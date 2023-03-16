## Webhook Receiver servers

This repository consists of two webhook servers: one built with Node/Express, and another built with Python/Django. Both servers receive webhook requests and process them accordingly.

### Running the Node/Express server

Clone the repository and go to the node directory
 ```
 cd node
 ```

Install the required dependencies by running
```
npm install
```

Run the Node Server
```
node app.js
```

### Running the Python/Django server

Clone the repository and go to the python directory
 ```
 cd python
 ```

Create your virtual environment and install the dependencies
```
virtualenv venv
source venv/bin/activate
pip install -r requirements.txt
```

Run the Python Server
```
python webhook/manage.py runserver
```

### Test the webhook locally

To test the webhook locally, you can use the `curl` command in your terminal. Here's an example of how to send a POST request to the webhook URL:

```
curl -X POST http://localhost:8000/webhook \
-H "Content-Type: application/json" \
-d '{"key1": "value1", "key2": "value2"}'
```

For your application make sure to replace current URL with the actual URL where your server is listening, if it's different.