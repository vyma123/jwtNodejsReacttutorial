import express from 'express';

const configViewEngine = (app) => {
  app.use(express.static('./src/public'));
  //dung viewengine co ten ejs
  app.set('view engine', 'ejs');
  //file views luu tru trong src/views
  app.set('views', './src/views');
};

export default configViewEngine;
