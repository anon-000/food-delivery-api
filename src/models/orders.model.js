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
                1, // initiated
                2, // completed
                3, // approved
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
        },
        paymentMethod: {
            type: String,
            required: true,
            enum: ['COD', 'Online'],
        },
        paymentStatus: {
            type: String,
            enum: ['Paid', 'Unpaid'],
            required: true,
        },
        userDetails: {
            name: {
                type: String,
            },
            email: {
                type: String,
            },
            phone: {
                type: String,
            },
            address: {
                type: String,
            },
            city: {
                type: String,
            },
            state: {
                type: String,
            },
            pinCode: {
                type: String,
            },
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
