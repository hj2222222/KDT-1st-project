import express from 'express'
import morgan from 'morgan'
import userRouter from './routes/user.js' //회원정보
import facilRouter from './routes/facil.js' // 편의시설
import cultureRouter from './routes/culture.js' //문화생활
import busRouter from './routes/bus.js' //버스
import priceRouter from './routes/price.js' //물가생활
import mytextRouter from './routes/mytext.js' //내가 쓴글
import cyberRouter from './routes/cyber.js' //내가 쓴글
import lib_lectureRouter from './routes/lib_lecture.js' //내가 쓴글

const app = express()
app.use(express.json())
app.use(morgan('combined'))


app.use('/user',userRouter)
app.use('/facil',facilRouter)
app.use('./culture',cultureRouter)
app.use('./bus',busRouter)
app.use('./price',priceRouter)
app.use('./mytext',mytextRouter)
app.use('./cyber',cyberRouter)
app.use('./lib_lecture',lib_lectureRouter)



app.listen(8080)