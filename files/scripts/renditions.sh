pwd

cd ../images/GuruGurumukh

pwd

for f in IMG*;
do
rendition=140.140
echo "Downloading "http://localhost:4502/content/dam/gurugurumukh/$f/jcr:content/renditions/cq5dam.thumbnail.$rendition.png"..."
curl -su admin:admin http://localhost:4502/content/dam/gurugurumukh/$f/jcr:content/renditions/cq5dam.thumbnail.$rendition.png --output $f.rendition.$rendition.png

rendition=319.319
echo "Downloading "http://localhost:4502/content/dam/gurugurumukh/$f/jcr:content/renditions/cq5dam.thumbnail.$rendition.png"..."
curl -su admin:admin http://localhost:4502/content/dam/gurugurumukh/$f/jcr:content/renditions/cq5dam.thumbnail.$rendition.png --output $f.rendition.$rendition.png


rendition=48.48
echo "Downloading "http://localhost:4502/content/dam/gurugurumukh/$f/jcr:content/renditions/cq5dam.thumbnail.$rendition.png"..."
curl -su admin:admin http://localhost:4502/content/dam/gurugurumukh/$f/jcr:content/renditions/cq5dam.thumbnail.$rendition.png --output $f.rendition.$rendition.png

rendition=640.480
echo "Downloading "http://localhost:4502/content/dam/gurugurumukh/$f/jcr:content/renditions/cq5dam.thumbnail.$rendition.png"..."
curl -su admin:admin http://localhost:4502/content/dam/gurugurumukh/$f/jcr:content/renditions/cq5dam.thumbnail.$rendition.png --output $f.rendition.$rendition.png

rendition=800.600
echo "Downloading "http://localhost:4502/content/dam/gurugurumukh/$f/jcr:content/renditions/cq5dam.thumbnail.$rendition.png"..."
curl -su admin:admin http://localhost:4502/content/dam/gurugurumukh/$f/jcr:content/renditions/cq5dam.thumbnail.$rendition.png --output $f.rendition.$rendition.png

done