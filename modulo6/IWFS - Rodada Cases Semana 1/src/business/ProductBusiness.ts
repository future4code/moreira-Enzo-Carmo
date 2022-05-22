import { IProductData } from "../model/IProductData"
import { SignUpInputDTO } from "../types/signUpInputDTO"
import { SignUpOutputDTO } from "../types/signUpOutputDTO"
import products from "./products.json"


export class ProductBusiness{
    private productDatabase: IProductData

    constructor (productDataRepository:IProductData){
        this.productDatabase = productDataRepository
    }

    create = async (input:any):Promise<string | undefined>=>{

        const {id, name, tags} = input

        if(!id && !name && !tags){
            for (let i=0; i<=products.products.length-1; i++) {
                await this.productDatabase.create(products.products[i])
                console.log(products.products[i]);

            }
            return "Product registered"

        } else {
            if(!id || !name || !tags){
                throw new Error("Insert ID, name and tag.")
            }

            const registeredProduct = await this.productDatabase.findById(id)
            if(registeredProduct){
            throw new Error("Product ID already registered.")
            }            
        }
        await this.productDatabase.create(input)
    }

    findProduct = async (id:any, name:any, tag:any):Promise<SignUpOutputDTO>=>{
        const idProduct = Number(id)

        const result = await this.productDatabase.findProduct(idProduct, name, tag)

        return result
    }
} 
 125  