process_find=$(find /home/ikhsan -type f -name '*.java');
if [ $process_find ];
then
 echo 'the file exists.'
else
 echo 'the file does not exists.'
fi
