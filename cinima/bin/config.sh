 #!/bin/bash
export PGPASSWORD='Qwe123@#'

 database="cinima"
 echo "Configuring database: $database"

 dropdb -U  node_user cinima
 createdb -U node_user cinima

 psql -U node_user  cinima<./bin/sql/cinima.sql

 echo "$database  configured" 