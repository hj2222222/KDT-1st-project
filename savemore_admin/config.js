import dotenv from 'dotenv'

dotenv.config();  // condig.js에서 관리할 수 있도록 연결

function required(key, defaultValue=undefined){
    const value = process.env[key] || defaultValue;  // or: 앞에 값이 true로 판별되면 앞의 값이 대입되고 같이 false로 판별되면 뒤에 값이 대입됨
    if(value == null){
        throw new Error(`키 ${key}는 undefined!!`);
    }
    return value;
}

export const config = {
    jwt: {
        secretKey: required('JWT_SECRET'),
        expiresInSec: parseInt(required('JWT_EXPIRES_SEC', 172800))
    },
    bcrypt: {
        saltRounds: parseInt(required('BCRYPT_SALT_ROUNDS', 10))
    },
    host: {
        port: parseInt(required('HOST_PORT', 8080))
    },
    db: {
        host: required('DB_HOST'),
        user: required('DB_USER'),
        database: required('DB_DATABASE'),
        password: required('DB_PASSWORD'),
        port: required('DB_PORT')
    }
}