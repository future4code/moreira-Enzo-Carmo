import { ProductBusiness } from "./business/ProductBusiness"
import {app} from "./Controller/app"
import { ProductContoller } from "./Controller/ProductController"
import { ProductDatabase } from "./data/ProductDatabase"




const productController = new ProductContoller(
    new ProductBusiness(
        new ProductDatabase
    )
)

app.post("/", productController.create)
app.get("/products", productController.findProduct)