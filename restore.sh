echo "Replace wordpress domain in dumpfile"
OLD_URL=http://localhost:8000
NEW_URL=https://bvm.tmy.io
dumpfile=$(ls | grep ".sql" | tail -n 1)
sed "s~$OLD_URL~$NEW_URL~g" dump.sql >$dumpfile

echo "Move dump to server and inside docker container and insert dump into DB"
scp -rp $dumpfile $wh:/
ssh $wh docker cp /$dumpfile bvm_db_1:/
ssh $wh docker exec bvm_db_1 /bin/bash -c "dumpfile=$(ls / | grep ".sql" | tail -n 1)"
ssh $wh 'docker exec bvm_db_1 /bin/bash -c "mysql -uwordpress -pwordpress bvm < /$(ls / | grep ".sql" | tail -n 1)"'

echo "Copy uploads folder in server"
scp -rp wp-content/uploads $wh:www/bvm/wp-content/
