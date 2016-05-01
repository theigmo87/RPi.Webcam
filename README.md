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

ffmpeg -s 320x240 -v verbose -i /dev/video0 -c:v libvpx -f webm -b:v 512 http://jmbp.local:8082/webcam

raspberry pi 2 - 03/05/16
ffserver -f /etc/ffserver.conf & ffmpeg -r 5 -s 320x240 -f video4linux2 -i /dev/video0 http://localhost:8082/webcam.ffm

with this in /etc/ffserver.conf
HTTPPort 8082
HTTPBindAddress 0.0.0.0
MaxClients 10
MaxBandwidth 50000

<Feed webcam.ffm>
file /tmp/webcam.ffm
FileMaxSize 10M
</Feed>

<Stream webcam.mjpeg>
Feed webcam.ffm
Format mjpeg
VideoSize 320x240
VideoFrameRate 10
VideoBitRate 20000
VideoQMin 1
VideoQMax 10
</Stream>

<Stream stat.html>
Format status
</Stream>


-- ffmpeg -s 320x240 -v verbose -i /dev/video0 -c:v libvpx -f webm -b:v 512 http://jmbp.local:8084/stream01
