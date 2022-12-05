const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
  createProductReview,
  getProductReviews,
  deleteReview,
  getAdminProducts,
} = require("../controllers/productController");
const { isAuthenticated, authorizeToRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/products").get(getAllProducts);

router
  .route("/staff/products")
  .get(isAuthenticated, authorizeToRoles("staff","admin"), getAdminProducts);

router
  .route("/staff/product/new")
  .post(isAuthenticated, authorizeToRoles("admin","staff"), createProduct);

router
  .route("/staff/product/:id")
  .put(isAuthenticated, authorizeToRoles("admin","staff"), updateProduct)
  .delete(isAuthenticated, authorizeToRoles("admin","staff"), deleteProduct)
  .get(isAuthenticated);

router.route("/product/:id").get(getProductDetails);

router.route("/review").put(isAuthenticated, createProductReview);

router
  .route("/reviews")
  .get(getProductReviews)
  .delete(isAuthenticated, deleteReview);

module.exports = router;
