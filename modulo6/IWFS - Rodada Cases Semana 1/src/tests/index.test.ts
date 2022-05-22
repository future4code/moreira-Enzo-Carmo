import { ProductBusiness } from "../business/ProductBusiness";
import { ProductDatabaseMock } from "./mocks/ProductDatabaseMock";

const productBusinessMock = new ProductBusiness(
    new ProductDatabaseMock() as any
)

describe("Teste de cadastro de produtos", ()=>{

    test("Erro que retorna quando id, nome e tag estiverem vazios", async()=>{
        expect.assertions
        try {
            await productBusinessMock.create(
                {
                    id:0,
                    name:"",
                    tags: false
                }                
            )
        } catch (error:any) {
            expect(error.message).toEqual("Product successfully registered")
        }
    })

    test("Erro que retorna quando id estiver vazio", async()=>{
        expect.assertions
        try {
            await productBusinessMock.create(
                {
                    id:0,
                    name:"teste",
                    tags: []
                }                
            )
        } catch (error:any) {
            expect(error.message).toEqual("insert ID")
        }
    })

    test("Erro que retorna quando name estiver vazio", async()=>{
        expect.assertions
        try {
            await productBusinessMock.create(
                {
                    id:1456,
                    name:"",
                    tags: ["teste"]
                }                
            )
        } catch (error:any) {
            expect(error.message).toEqual("Insert name")
        }
    })

    test("Erro que vai retornar quando tags estiver vazio", async()=>{
        expect.assertions
        try {
            await productBusinessMock.create(
                {
                    id:1456,
                    name:"teste",
                    tags: false
                }                
            )
        } catch (error:any) {
            expect(error.message).toEqual("Insert tag")
        }
    })
})

describe("Teste de busca de produtos", ()=>{

    test("Erro que retorna produto buscado por id.", async()=>{
        expect.assertions
        try {
            const result = await productBusinessMock.findProduct(6, null, null)

            expect(result).toEqual({
                id:6,
                name:"teste",
                tags:[]
            })

        } catch (error:any) {
            console.log(error);
        }
    })

    test("Erro que retorna produto buscado por name.", async()=>{
        expect.assertions
        try {
            const result = await productBusinessMock.findProduct(null, "teste", null)

            expect(result).toEqual({
                id:6,
                name:"teste",
                tags:[]
            })

        } catch (error:any) {
            console.log(error);
        }
    })

    test("Erro que retorna produto buscado por tag.", async()=>{
        expect.assertions
        try {
            const result = await productBusinessMock.findProduct(null, null, [])

            expect(result).toEqual({
                id:6,
                name:"teste",
                tags:[]
            })

        } catch (error:any) {
            console.log(error);
        }
    })
}) 
 19  