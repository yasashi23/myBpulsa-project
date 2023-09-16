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
            required:["nomor","otp"],
            properties:{
                nomor:{
                    bsonType:"string",
                    description:"nomor HP Error"
                },
                otp:{
                    bsonType:"string",
                    description:"otp Error"
                }
            }
        }
    }
})

db.createCollection("dataPelanggan",{
    validationAction:"error",
    validator:{
        $jsonSchema:{
            bsonType:"object",
            required:["nama","nomor","nomorWa","kartu","pulsa","harga","status"],
            properties:{
                nama:{
                    bsonType:"string",
                    description:"nama Error"
                },
                nomor:{
                    bsonType:"string",
                    description:"nomor Error"
                },
                nomorWa:{
                    bsonType:"string",
                    description:"nomorWa HP Error"
                },
                kartu:{
                    bsonType:"string",
                    description:"kartu Error"
                },
                pulsa:{
                    bsonType:"string",
                    description:"Pulsa Error"
                },
                harga:{
                    bsonType:"string",
                    description:"harga Error"
                },
                status:{
                    bsonType:"string",
                    description:"status Error"
                }
            }
        }
    }
})