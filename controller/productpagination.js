const Product = require("../Models/product")

exports.productpagination = async (req, res) => {
    let perPage = 2;
    let currentPage = req.params.page || 1;
    let data = await Product.find()
        .skip(perPage * currentPage - perPage)
        .limit(perPage);
    console.log(Product);

    let totalcount = await Product.find().count();

    let totalPages = Math.ceil(totalcount / perPage);
    res.send({
        perPage: perPage,
        currentPage: currentPage,
        data: data,
        totalPages: totalPages
    });
}