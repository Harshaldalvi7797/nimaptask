const mongoose = require("mongoose");
// @ts-ignore
const { ObjectId } = mongoose.Schema;

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32
        },
        description: {
            type: String,
            trim: true,
            required: true,
            maxlength: 2000
        },
        price: {
            type: Number,
            required: true,
            maxlength: 32,
            trim: true
        },
        category: String
        // category: {
        //     type: ObjectId,
        //     ref: "Category",
        //     required: true
        // }

    },
    { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);