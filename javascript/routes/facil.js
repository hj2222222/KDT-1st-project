import express from 'express'

const router = express.Router()

router.use((req,res,next)=>{
    console.log('users에 존재하는 미들웨어')
    next()
})

router.get('/',(req,res)=>{
    res.status(200).send('GET:/시설종류 확인')
})


router.get('/:name',(req,res)=>{
    res.status(201).send('GET:/구확인')
})


router.get('/:name/:gu',(req,res)=>{
    res.status(201).send('GET:/name/:gu 시설리스트')
})

export default router