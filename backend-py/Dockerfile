FROM python:3.10

WORKDIR /backend_py

COPY requit.txt ./

RUN pip install -r requit.txt

COPY . .

EXPOSE 8000

CMD [ "python3","backend/manage.py", "runserver","0.0.0.0:8000" ]





