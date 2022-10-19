import { Router } from "express";
import { Request, Response } from "express";

const router = Router()

// criando a rota home
router.get('/', (req:Request,res:Response) =>{
    res.send('ROTA HOME FUNCIONANDO')
})

router.get('/dog', (req:Request,res:Response) =>{
    res.send('CACHORRO')
})
router.get('/cat', (req:Request,res:Response) =>{
    res.send('gato')
})
router.get('/fish', (req:Request,res:Response) =>{
    res.send('peixe')
})

//exportando o arquivo index.ts
export default router