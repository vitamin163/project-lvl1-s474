install:
	npm install

startEven:
	npx babel-node src/bin/brain-even.js

startCalc:
	npx babel-node src/bin/brain-calc.js

publish:
	npm publish

lint:
	npx eslint .
