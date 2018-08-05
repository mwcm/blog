# from https://github.com/aripalo/gatsby-docker/blob/master/Dockerfile
FROM node:9.5-alpine

EXPOSE 8000

RUN apk update && \
    apk add --update --repository http://dl-3.alpinelinux.org/alpine/edge/testing vips-tools vips-dev fftw-dev gcc g++ make libc6-compat && \
    apk add git && \
    apk add python && \
    apk add yarn && \
    rm -rf /var/cache/apk/*

RUN yarn global add gatsby

RUN mkdir -p /site
WORKDIR /site
VOLUME /site

COPY ./entry.sh /
RUN chmod +x /entry.sh
ENTRYPOINT ["/entry.sh"]
