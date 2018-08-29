# ! /bin/bash

git reset --hard origin/new_api
git clean -f
git pull origin new_api
cnpm install
npm stop
EGG_SERVER_ENV=prod npm start