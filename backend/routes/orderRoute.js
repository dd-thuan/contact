const express = require("express");
const {
  newOrder,
  getSingleOrder,
  myOrders,
  getAllOrders,
  updateOrder,
  deleteOrder,
} = require("../controllers/orderController");
const router = express.Router();

const { isAuthenticated, authorizeToRoles } = require("../middleware/auth.js");

router.route("/order/new").post(isAuthenticated, newOrder);

router.route("/order/:id").get(isAuthenticated, getSingleOrder);

router.route("/orders/me").get(isAuthenticated, myOrders);

router
  .route("/staff/orders/")
  .get(isAuthenticated, authorizeToRoles("admin","staff"), getAllOrders);

router
  .route("/staff/order/:id")
  .put(isAuthenticated, authorizeToRoles("admin","staff"), updateOrder)
  .delete(isAuthenticated, authorizeToRoles("admin","staff"), deleteOrder);

module.exports = router;
