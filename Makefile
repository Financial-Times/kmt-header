node_modules/@financial-times/n-gage/index.mk:
	npm install --no-save --no-package-lock @financial-times/n-gage
	touch $@

-include node_modules/@financial-times/n-gage/index.mk


test: verify a11y

build:
	./node_modules/.bin/gulp
	make build-n-makefile

run:
	./node_modules/.bin/nodemon demos/app.js

a11y: build
	@node .pa11yci.js
	@PA11Y=true node demos/app
	@$(DONE)
