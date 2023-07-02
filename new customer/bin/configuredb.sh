 #!/bin/bash
export PGPASSWORD='node_user'

 database="newsoacustomerdb"
 echo "Configuring database: $database"

 dropdb -U  node_user newsoacustomer
 createdb -U node_user newsoacustomer

 psql -U node_user  newsoacustomer<./bin/sql/newsoacustomer.sql

 echo "$database  configured"   