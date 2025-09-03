@echo off
echo Installing gems...
call bundle install

echo Starting Jekyll with live reload...
call bundle exec jekyll serve --livereload

pause
