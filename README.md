# RPi.Webcam

make the websocket module start listening and broadcast the stream -
node my_node_modules/webcam-stream/index.js stream

Start webcam server bash command (pi) -
ffmpeg -s 320x240 -f video4linux2 -i /dev/video0 -f mpeg1video \
-b 200k http://localhost:8082/stream/320/240/

Start webcam server bash command (osx) -
ffmpeg -s 320x240 -f avfoundation -i /dev/video0 -f mpeg1video \
-b 200k http://localhost:8082/stream/320/240/


latest that works:
ffserver -f /etc/ffserver.conf & ffmpeg -s 320x240 -f video4linux2 -v verbose -i /dev/video0 -f mpeg1video -b:v 64k http://localhost:8082/stream/webcam.ffm
