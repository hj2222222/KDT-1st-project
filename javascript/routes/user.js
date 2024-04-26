import express from 'express'

const router = express.Router()

router.use((req,res,next)=>{
    console.log('users에 존재하는 미들웨어')
    next()
})

router.get('/',(req,res)=>{
    res.status(200).send('GET:/회원정보 확인')
})


router.put('/',(req,res)=>{
    res.status(201).send('POST:/회원정보 수정')
})


router.delete('/',(req,res)=>{
    res.status(201).send('DELETE:/회원탈퇴')
})

export default router