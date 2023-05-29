import {Router, Request, Response} from 'express';
import multer from 'multer';

import { CreateUserCOntroller } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserController';
import { isAuthenticated } from './middlewares/isAuthenticated';
import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import { ListCategoryController } from './controllers/category/ListCategoryController';
import { CreateProductsController } from './controllers/product/CreateProductsController';
import { ListByCategoryController } from './controllers/product/ListByCategoryController';
import { CreateOrderController } from './controllers/order/CreateOrderController';
import { RemoveOrderController } from './controllers/order/RemoveOrderController';
import { AddItemController } from './controllers/order/AddItemController';
import { RemoveItemController } from './controllers/order/RemoveItemController';
import { SendOrderController } from './controllers/order/SendOrderController';
import { ListOrderController } from './controllers/order/ListOrderController';
import { DetailOrderController } from './controllers/order/DetailOrderController';
import { FinishOrderController } from './controllers/order/FinishOrderController';

const router = Router();

import uploadConfig from './config/multer';

const upload = multer(uploadConfig.upload("./tmp"))

// -------------ROTAS DE USER-------------------------------
// Cadastrar usuarios
router.post('/users', new CreateUserCOntroller().handle)
// login
router.post('/session', new AuthUserController().handle)
// Detalhe do usuario
router.get('/me', isAuthenticated, new DetailUserController().handle)
// ---------------------------------------------------------
// ----------- Rotas Category ------------------------------
// vai criar uma categoria
router.post('/category', isAuthenticated, new CreateCategoryController().handle)
// Vai listar todas as categorias
router.get('/category', isAuthenticated, new ListCategoryController().handle)
// ---------------------------------------------------------
// --------------- Rotas produtos --------------------------
// criando produto
router.post('/products', isAuthenticated, upload.single('file'), new CreateProductsController().handle);
// esta listando todos os produtos da categoria 
router.get('/category/products', isAuthenticated, new ListByCategoryController().handle);

// ROTAS ORDER
// Ele está criando uma Order
router.post('/order', isAuthenticated, new CreateOrderController().handle);
// Ele esta deletando uma order
router.delete('/order', isAuthenticated, new RemoveOrderController().handle);
// Está adicionando algo a order
router.post('/order/add', isAuthenticated, new AddItemController().handle);
// Está removendo algo da order
router.delete('/order/remove', isAuthenticated, new RemoveItemController().handle);
// Esta enviando algo para a order ( ATUALIZANDO A ORDER ) basicamente enviando a informação que saiu de rascunho
router.put('/order/send', isAuthenticated, new SendOrderController().handle);
// Esta listando a orders que saiaram de rascunho
router.get('/orders', isAuthenticated, new ListOrderController().handle);
// vai listar os detalhe do pedido 
router.get('/order/detail', isAuthenticated, new DetailOrderController().handle);
// Atualizar o status do pedido
router.put('/order/finish', isAuthenticated, new FinishOrderController().handle);

export { router };