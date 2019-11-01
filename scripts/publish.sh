if !(make --directory=../book html); then
    echo "Build Failed"
    exit
fi

echo "Build Succeeded; push to GitHub"
cp -R ../book/_build/html/* .
rm -r static
mv _static static

for f in *.html
do
    sed 's/_static/static/g' $f > tmp.html;
    mv tmp.html $f;
done
rm tmp.html
for f in */*.html
do
    sed 's/_static/static/g' $f > tmp.html;
    mv tmp.html $f;
done
rm tmp.html
git add .
git commit -m "publish latest"
git push
exit
