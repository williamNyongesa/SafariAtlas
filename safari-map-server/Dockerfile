FROM python:3.9-alpine
WORKDIR /app
COPY Pipfile Pipfile.lock ./
RUN pip install --upgrade pip && \
    pip install pipenv && \
    pipenv install --deploy --ignore-pipfile
COPY . .
EXPOSE 5000
CMD ["pipenv", "run", "python", "app.py"]
