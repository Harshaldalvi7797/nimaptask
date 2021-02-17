const Category = require("../Models/category")
exports.createCategory = async (req, res) => {

    let category = await Category.findOne({ category: req.body.category });
    if (category) {
        return res.status(402).send({ message: "category present " });
    }
    console.log(category)
    let newcategory = new Category({
        category: req.body.category
    })
    let data = await newcategory.save()
    res.send({ message: "category", d: data });


}

exports.deleteCategory = async (req, res) => {
    let category = await Category.findByIdAndRemove(req.params.id);
    if (!category) {
        return res.status(404).send({
            message: "Invalid category Id"
        });
    }
    res.send({ message: "delete" })
}

exports.updatecategory = async (req, res) => {
    let categoryName = await Category.findById(req.params.id);
    if (!categoryName) {
        return res.status(404).send({ message: "Invalid category id" });
    }
    // @ts-ignore
    categoryName.category = req.body.category

    await categoryName.save()
    res.send({ message: "category update successfully" });


}

exports.getCategory = async (req, res) => {
    let data = await Category.find();
    res.send({ d: data });
}