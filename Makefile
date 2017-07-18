node_modules/@financial-times/n-gage/index.mk:
	npm install --no-save --no-package-lock @financial-times/n-gage
	touch $@

-include node_modules/@financial-times/n-gage/index.mk

unit-test:
	jest src/*

test:
	# skip

build:
	./node_modules/.bin/gulp
	make build-n-makefile
