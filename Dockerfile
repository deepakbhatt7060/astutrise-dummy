FROM debian:latest

WORKDIR /astutrise
RUN apt-get update && \
    apt-get install -y curl && \
    curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && \
    apt-get install -y nodejs=20.8.1*

COPY package*.json /astutrise/
COPY public /astutrise/public/
COPY .next /astutrise/.next/

RUN npm install --production

EXPOSE 4000

CMD ["npm", "run", "start"]

