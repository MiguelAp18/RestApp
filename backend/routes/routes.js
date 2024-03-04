import express from 'express';
import { createCustomer, destroyCustomer, getAllCustomers, getCustomer, updateCustomer } from '../controllers/CustomerController.js';

const router  = express.Router();

router.get('/', getAllCustomers);
router.get('/:id', getCustomer);
router.post('/', createCustomer);
router.put('/:id', updateCustomer);
router.delete('/:id', destroyCustomer);

export default router;
