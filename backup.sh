echo "Backup DB"
# docker exec bvm-event-db-1 apt-get install postgresql-client
docker exec bvm-event-db-1 /bin/bash -c "mysqldump -uwordpress -pwordpress bvm > dump.sql"
dumpfile=$(docker exec bvm-event-db-1 ls / | grep ".sql" | tail -n 1)
echo $dumpfile
docker cp bvm-event-db-1:$dumpfile .
