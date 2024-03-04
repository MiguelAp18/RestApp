import CustomerModel from "../models/CustomerModel.js";

export const getAllCustomers = async (req, res) => {
    try {
        const customers  = await CustomerModel.findAll();
        res.json(customers);
    } catch (error) {
        res.json({ message: error.message})
    }
}

export const getCustomer = async (req, res) => {
    try {
        const customer  = await CustomerModel.findAll({
            where: { idcustomers: req.params.id }
        });
        res.json(customer[0]);
    } catch (error) {
        res.json({ message: error.message})
    }
}

export const createCustomer = async (req, res) => {
    try {
        await CustomerModel.create(req.body)
        res.json({
            "message": "Customer created!"
        })
    } catch (error) {
        res.json({ message: error.message})
    }
}

export const updateCustomer = async (req, res) => {
    try {
        await CustomerModel.update(req.body, {
            where: { idcustomers: req.params.id }
        })
        res.json({
            "message": "Customer updated!"
        })
    } catch (error) {
        res.json({ message: error.message})
    }
}

export const destroyCustomer = async (req, res) => {
    try {
        await CustomerModel.destroy({
            where: { idcustomers: req.params.id }
        })
        res.json({
            "message": "Customer deleted!"
        })
    } catch (error) {
        res.json({ message: error.message})
    }
}