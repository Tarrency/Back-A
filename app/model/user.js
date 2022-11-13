module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
  
    const UserSchema = new Schema({
      _id: {type: String},
      username: { type: String  },
      password: { type: String  },
    });
  
    return mongoose.model('User111', UserSchema, 'user');
  }