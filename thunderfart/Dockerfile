FROM ubuntu:24.04
RUN apt update -y && apt upgrade -y && apt install -y \
  ffmpeg \
  python3 \
  gnupg \
  python3-pip \ 
  build-essential \
  curl \
  pkg-config \
  libssl-dev \
  ca-certificates \
  && curl -fsSL https://deb.nodesource.com/setup_25.x | bash - \
  && apt install -y nodejs
RUN python3 -m pip install --break-system-packages  openai-whisper
COPY . .
RUN npm i
ENTRYPOINT [ "npm", "run", "start" ]
