# vacation-chooser-app

##demo
[art-and-history.herokuapp.com](https://art-and-history.herokuapp.com)

##Installation
The apps requires installations of Node, npm, and MongoDB. When all there requiment are met, donwload the project and run
```
npm install
```

##Run app
```
$ npm run dev 
```
MongoDB process should be running


## Testing
To test production build locally:
```
$ npm run build-dist
set NODE_ENV=production && set MONGODBHQ_ENV=mongodb://localhost/vacationsDB && npm start
```

