.PHONY: build-MyMoviesApiFunction

build-MyMoviesApiFunction:
	rm -rf "$(ARTIFACTS_DIR)/"
	cp -r ./dist "$(ARTIFACTS_DIR)/"
