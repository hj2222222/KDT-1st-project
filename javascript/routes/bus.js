import express from 'express'

const router = express.Router()

router.use((req,res,next)=>{
    next()
})

router.get('/',(req,res)=>{
    res.status(200).send('구 리스트확인')
})


router.get('/:name',(req,res)=>{
    res.status(201).send('get:/시간표 출력')
})

export default router