node_modules/@financial-times/n-gage/index.mk:
	npm install --no-save --no-package-lock @financial-times/n-gage
	touch $@

-include node_modules/@financial-times/n-gage/index.mk

test: verify

build:
	./node_modules/.bin/gulp
	make build-n-makefile

run:
	./node_modules/.bin/nodemon demos/app.js
