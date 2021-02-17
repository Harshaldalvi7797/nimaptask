const express = require("express")
const router = express.Router()

const { createProduct, getAllProducts, updateProduct, deleteProduct } = require("../controller/product")

router.post("/create/product", createProduct)
router.get("/getproducts", getAllProducts)
router.put("/updateproduct/:id", updateProduct)
router.delete("/deleteproduct/:id", deleteProduct)

module.exports = router
