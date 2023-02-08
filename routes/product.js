import express from "express";
import { addCategory, addProductImage, createProduct, deleteCategory, deleteProduct, deleteProductImage, getAdminProducts, getAllCategories, getAllProducts, getProductDetails, updateProduct } from "../controller/product.js";

import { isAdmin, isAuthenticated } from "../middlewares/auth.js";
import { singleUpload } from "../middlewares/multer.js";

const router =express.Router();

router.get("/all",getAllProducts);
router.get("/admin",isAuthenticated,isAdmin, getAdminProducts);
router.post("/new", isAuthenticated, isAdmin , singleUpload ,createProduct);
router
  .route("/single/:id")
  .get(getProductDetails)
  .put(isAuthenticated,isAdmin,updateProduct)
  .delete(isAuthenticated,isAdmin,deleteProduct);


  router
  .route("/images/:id")
  .post(isAuthenticated, isAdmin, singleUpload, addProductImage)
  .delete(isAuthenticated, isAdmin, deleteProductImage);



//   category
  router.post("/category",isAuthenticated, isAdmin,addCategory);
  router.get("/categories",getAllCategories);
  router.route("/category/:id").delete(deleteCategory);

export default router;
