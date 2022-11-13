module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
  
    const commentSchema = new Schema({
      _id: {type: String},
      name: { type: String  },
      wb: { type: String  },
      wbname: { type: String  },
      wbtime: { type: String  },
    });
  
    return mongoose.model('Comment111', commentSchema, 'comment');
  }