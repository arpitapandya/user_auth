// mongoose setup

import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/test3', {
  useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true,
});
