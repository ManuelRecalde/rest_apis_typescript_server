import { Request, Response } from "express"
import Product from "../models/Product.model"


export const getProducts = async (req: Request, res: Response) => {

    const products = await Product.findAll({
        order: [
            ['id', 'DESC']
        ],
        attributes: {exclude: ['createdAt', 'updatedAt']}
    })

    res.json({data: products})
}


export const getProductById = async (req: Request, res: Response) => {

    const {id} = req.params
    const product = await Product.findByPk(id)

    if(!product){
        return res.status(404).json({
            error: 'Producto No Encontrado'
        })
    }
    res.json({data:product})
}

export const createProduct = async (req: Request, res: Response) => {

    // La validacion esta en router.ts

    const product = await Product.create(req.body)

    res.status(201).json({data: product})
}

export const updateProduct = async (req: Request, res: Response) => {
    //Obtener prod
    const {id} = req.params
    const product = await Product.findByPk(id)

    if(!product){
        return res.status(404).json({
            error: 'Producto No Encontrado'
        })
    }

    //Actualizar prod
    await product.update(req.body)
    await product.save()

    res.json({data: product})
}

export const updateAvailability = async (req: Request, res: Response) => {
    //Obtener prod
    const {id} = req.params
    const product = await Product.findByPk(id)

    if(!product){
        return res.status(404).json({
            error: 'Producto No Encontrado'
        })
    }

    //Actualizar prod
    product.availability = !product.dataValues.availability
    await product.save()
    res.json({data: product})
}

export const deleteProduct = async (req: Request, res: Response) => {
    //Obtener prod
    const {id} = req.params
    const product = await Product.findByPk(id)

    if(!product){
        return res.status(404).json({
            error: 'Producto No Encontrado'
        })
    }

    await product.destroy()
    res.json({data:'producto eliminado'})
}