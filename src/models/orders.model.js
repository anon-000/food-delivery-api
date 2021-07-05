// orders-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
export default function (app) {
  const modelName = 'orders';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const { ObjectId } = Schema.Types;
  const schema = new Schema({

    user: {
      type: ObjectId,
      ref: 'user',
      required: true,
    },
    status: {
      type: Number,
      enum: [
        1, // ordered
        2, // approved
        0, // cancelled
      ],
      default: 1,
    },
    orderedItems: {
      type: [{
        name: {
          type: String,
        },
        quantity: {
          type: Number,
        },
        price: {
          type: Number,
        }
      }],
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    }
  }, {
    timestamps: true
  });

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);

}
