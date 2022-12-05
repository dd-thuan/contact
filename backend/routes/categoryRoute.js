const express = require("express");
const {
  createCategory,
  getAdminCategories,
  getCategoryDetails,
  updateCategory,
  deleteCategory,
} = require("../controllers/categoryController");
const { isAuthenticated, authorizeToRoles } = require("../middleware/auth");

const router = express.Router();

router
  .route("/staff/category/new")
  .post(isAuthenticated, authorizeToRoles("admin","staff"), createCategory);

router
.route("/staff/categories").get(getAdminCategories);

router.
  route("/staff/category/:id")
  .get(isAuthenticated, authorizeToRoles("admin","staff"), getCategoryDetails)
  .put(isAuthenticated, authorizeToRoles("admin","staff"), updateCategory)
  .delete(isAuthenticated, authorizeToRoles("admin","staff"), deleteCategory)
  .get(isAuthenticated);

  module.exports = router;