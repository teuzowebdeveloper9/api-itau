import {Router} from 'express';
import {PostTransacao} from  '../controllers/TransacaoController.js'
export const router = Router();


router.get ('/transacao', (req,res) => {
    return res.status(200).json({message : 'rota transacao'})
})
router.post('/transacao', PostTransacao) 

