FROM python:3.8-slim-buster

# RUN apt-get update && apt-get install -y gcc libc-dev
WORKDIR /app

COPY . .
RUN mkdir secret
RUN touch secret/flag.txt
RUN echo "grepCTF{J41lbr34k_5ucc3ssfu1_6er87124u0df7sg6}" > secret/flag.txt
CMD ["python", "pyjail.py"]