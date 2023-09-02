const express = require('express');
const router = express.Router();

const blogController =require('../controler/blogController')
const blogDetailsController = require('../controler/blogDetailsController')
const commentController = require('../controler/commentController')
const massageController = require('../controler/messageController')
const portfolioController = require('../controler/portfolioController')
const productController = require('../controler/productController')
const profitController = require('../controler/profitController')
const projectController = require('../controler/projectController')
const serviceController =require('../controler/serviceController')
const titleController =require('../controler/titleController')
//blogcontroller 
router.get('/create', blogController.create)
router.get('/read', blogController.read);
router.get('/delete', blogController.delete)
router.get('/update', blogController.update)
//blog details controller
router.get('/blog-details-create', blogDetailsController.create)
router.get('/blog-details-read', blogDetailsController.read);
router.get('/blog-details-delete', blogDetailsController.delete)
router.get('blog-details-update', blogDetailsController.update)
//blog comment controller
router.get('/blog-comment-create', commentController.create)
router.get('/blog-comment-read', commentController.read);
router.get('/blog-comment-delete', commentController.delete)
router.get('blog-comment-update', commentController.update)
//bolg massage controller
router.get('/blog-massage-create', massageController.create)
router.get('/blog-massage-read', massageController.read);
router.get('/blog-massage-delete', massageController.delete)
router.get('/blog-massage-update', massageController.update)
//portfolioController
router.get('/protfolio-create', portfolioController.create)
router.get('/protfolio-read', portfolioController.read);
router.get('/protfolio-delete', portfolioController.delete)
router.get('/protfolio-update', portfolioController.update)
//product controller
router.get('/product-cteate', productController.create)
router.get('/product-read', productController.read)
router.get('/product-delete', productController.delete)
router.get('/product-update', productController.update)
//profit controller
router.get('/profit-create', profitController.create)
router.get('/profit-read', profitController.read)
router.get('/profit-delete', profitController.delete)
router.get('/profit-update', profitController.update)
//projectController
router.get('/project-create', projectController.create)
router.get('/project-read', projectController.read)
router.get('/project-delete', projectController.delete)
router.get('/project-update', projectController.update)
//serviceController
router.get('/service-create', serviceController.create)
router.get('/service-read', serviceController.read)
router.get('/service-detete', serviceController.delete)
router.get('/service-update', serviceController.update)
//titleController
router.get('/title-create', titleController.create)
router.get('/title-read', titleController.read)
router.get('/title-delete', titleController.delete)
router.get('/title-update', titleController.update)


module.exports =router