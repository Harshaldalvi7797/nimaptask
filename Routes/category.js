const express = require("express")
const router = express.Router()
const { getCategory, createCategory, deleteCategory, updatecategory } = require("../controller/category")

router.get("/getcategories", getCategory)
router.post("/create/category", createCategory)
router.delete("/deletecategory/:id", deleteCategory)
router.put("/updatecategory/:id", updatecategory)


module.exports = router