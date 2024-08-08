FROM python:3.9-alpine
WORKDIR /app
RUN apk add --no-cache gcc musl-dev libffi-dev
COPY Pipfile Pipfile.lock ./
RUN pip install --upgrade pip
RUN pip install --no-cache-dir pipenv && \
    PIPENV_VENV_IN_PROJECT=1 pipenv install --deploy --ignore-pipfile

COPY . .
EXPOSE 5000
CMD ["pipenv", "run", "python", "app.py"]

