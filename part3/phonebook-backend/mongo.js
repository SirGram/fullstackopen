const mongoose = require('mongoose')

if (process.argv.length!==3 && process.argv.length !==5) {
    
  console.log("number of arguments: ", process.argv.length)
  console.log('give password as argument or adjust contact content')
  process.exit(1)
}else{
    const password = process.argv[2]
    //Added contactApp
    const url =
    `mongodb+srv://mongogram:${password}@cluster0.ci9tjkv.mongodb.net/contactApp?retryWrites=true&w=majority`
    
    
    mongoose.set('strictQuery',false)
    mongoose.connect(url)

    const noteSchema = new mongoose.Schema({
        name: String,
        number: String,
        })
    
        const Contact = mongoose.model('Contact', noteSchema)

    if (process.argv.length === 3){
        Contact.find({}).then(result =>{
            console.log(`phonebook:`)
            result.forEach(contact => {
                console.log(contact.name, contact.number)
            })
            mongoose.connection.close()
        })
    }
    else if (process.argv.length ==5){
        const name = process.argv[3] 
        const number = process.argv[4]         
    
        const contact = new Contact({
        name: name,
        number: number,
        })
    
        contact.save().then(result => {
        console.log(`added ${name} number ${number} to phonebook`)
        mongoose.connection.close()
        })
    }

   
    


}

