const Product = require("../Models/product")

exports.createProduct = async (req, res) => {

    let product = await Product.findOne({ name: req.body.name });
    if (product) {
        return res.status(402).send({ message: "product present " });
    }
    console.log(product)
    let newproduct = new Product({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category

    })
    let data = await newproduct.save()
    res.send({ message: "product", d: data });
}
exports.getAllProducts = async (req, res) => {
    const products = await Product.find()
    res.send({ d: products })


}

exports.updateProduct = async (req, res) => {
    let product = await Product.findById(req.params.id);
    if (!product) {
        return res.status(404).send({ message: "Invalid product id" });
    }
    // @ts-ignore
    product.name = req.body.name,
        // @ts-ignore
        product.description = req.body.description,
        // @ts-ignore
        product.price = req.body.price,
        // @ts-ignore
        product.category = req.body.category,


        await product.save()
    res.send({ message: "product update successfully" });

}
exports.deleteProduct = async (req, res) => {
    let product = await Product.findByIdAndRemove(req.params.id);
    if (!product) {
        return res.status(404).send({
            message: "Invalid product Id"
        });
    }
    res.send({ message: "delete product successfully" })

}