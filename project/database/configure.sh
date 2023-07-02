database="getintouch"

echo "configuring:database:$database"


dropdb -U postgres getintouch
createdb -u postgres create getintouch

psql -u postgres <./database/database.sql

echo "$database:configured"