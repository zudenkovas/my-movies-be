.PHONY: build-MyMoviesApiFunction

build-MyMoviesApiFunction:
	rm -rf dist
	npm install
	cp -r ./node_modules "$(ARTIFACTS_DIR)/"
	npm run build
	cp -r ./dist/src/* "$(ARTIFACTS_DIR)/"
