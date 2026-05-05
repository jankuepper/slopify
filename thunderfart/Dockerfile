FROM debian:bullseye-slim
RUN apt-get update && \
  apt-get install -y \
  ffmpeg \
  python3 \
  gnupg \
  python \ 
  build-essential \
  curl \
  pkg-config \
  libssl-dev \
  ca-certificates 3-pip \
  && curl -fsSL https://deb.nodesource.com/setup_25.x | bash - \
  && apt install -y nodejs
RUN pip install openai-whisper
COPY . .
RUN npm i
ENTRYPOINT [ "npm", "run", "start" ]
