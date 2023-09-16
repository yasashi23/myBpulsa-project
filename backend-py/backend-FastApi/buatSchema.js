db.createCollection("latihanSchema",{
    validationAction:"error",
    validator:{
        $jsonSchema:{
            bsonType:"object",
            required:["nama_depan","nama_belakang","umur","alamat"],
            properties:{
                nama_depan:{
                    bsonType:"string",
                    description:"must be string"
                },
                nama_belakang:{
                    bsonType:"string",
                    description:"must be string"
                },
                umur:{
                    bsonType:"int",
                    description:"yang bener lah"
                },
                alamat:{
                    bsonType:"string",
                    description:"isi yang bener"
                }
            }
        }
    }
})

db.createCollection("otp",{
    validationAction:"error",
    validator:{
        $jsonSchema:{
            bsonType:"object",
            required:["phone_number","otp"],
            properties:{
                phone_number:{
                    bsonType:"string",
                    description:"phone_number Error"
                },
                otp:{
                    bsonType:"string",
                    description:"otp Error"
                }
            }
        }
    }
})