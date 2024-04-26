import express from 'express'

const router = express.Router()

router.use((req,res,next)=>{
    console.log('users에 존재하는 미들웨어')
    next()
})

router.get('/',(req,res)=>{
    res.status(200).send('GET:/물가소식,행사, 커뮤니티 선택창')
})

router.get('/:name',(req,res)=>{
    res.status(200).send('상세리스트')
})

router.post('/',(req,res)=>{
    res.status(201).send('POST:/users 게시글작성')
})


router.put('/:name/:id',(req,res)=>{
    res.status(201).send('PUT:/users/:id 게시글수정')
})

router.delete('/:name/:id',(req,res)=>{
    res.status(201).send('DELETE:/users/:id 게시글삭제')
})

export default router