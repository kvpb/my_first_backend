#!/usr/bin/env bash

printf '\033[2J\033[3J\033[1;1H'
curl -i localhost:8000
printf '\n'
printf '\n'
curl -i localhost:8000
printf '\n'
printf '\n'
curl -i localhost:8000
printf '\n'
printf '\n'
printf '\n'
curl -i localhost:8000/birth_date
printf '\n'
printf '\n'
printf '\n'
curl -i localhost:8000/birth_city
printf '\n'
printf '\n'
printf '\n'
curl -i localhost:8000/wives
printf '\n'
printf '\n'
printf '\n'
curl -i localhost:8000/picture
printf '\n'
printf '\n'
printf '\n'
curl -i http://localhost:8000/public
printf '\n'
printf '\n'
printf '\n'
curl -i http://localhost:8000/protected
printf '\n'
printf '\n'
curl -i http://admin:admin@localhost:8000/protected
printf '\n'
printf '\n'
curl -i http://user:password@localhost:8000/protected
#printf '\n'
#printf '\n'
#curl -i http://iamgoingtobeabillionaire:markmywords@localhost:8000/protected
