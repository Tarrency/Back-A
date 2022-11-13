module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
  
    const ProductSchema = new Schema({
      _id: {type: String},
      name: { type: String  },
      jd: { type: String  },
      jdstar: { type: String  },
      jdtime: { type: String  },
      jdkind:  { type: String  },
      jdscore: { type: Number  },
      jdbrand: { type: String  },
    });
  
    return mongoose.model('Product111', ProductSchema, 'product');
  }