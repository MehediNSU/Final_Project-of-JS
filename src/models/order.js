const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema(
    {
        id: {
            type: Number,
            required: true,
        },
        date: {
            type: String,
            required: true,
        },
        products: {
            items: [{
                    productId: {
                        type: String,
                        required: true,
                    },
                    quantity: {
                        type: Number,
                        required: true,
                    },
                },
            ],
        },
        status: {
            type: String,
            required: true,
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Users',
            required: true,
        },
    },
    { timestamps: true },
);

module.exports = mongoose.model('Orders', OrderSchema);
