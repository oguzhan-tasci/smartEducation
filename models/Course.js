const mongoose = require("mongoose");
const slugify = require('slugify');

const CourseSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: [true, 'Your name should be same with others!'],
        required: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    slug:{ // benzersiz bir id görevi göstermesi için oluşturuyoruz. id'ler çok kaba gözüktüğü için 'slugify' paketini kullanıyoruz.
        // Tek tek statik olarak bu degeri biz giremeyeceğimiz için yukarıdaki 'name' değerini alacağız ve bunu slug'a çevireceğiz.
        type: String,
        unique : true
    }
}, {
    // timestamps:true --> createdAt yerine genellikle 'timestamps' kullanılır !
});

// Veritabanına dokuman oluşturmadan once çalışır : 'pre' metodu.
CourseSchema.pre('validate',function(next) {
    this.slug = slugify(this.name,{
        lower:true,
        trim:true,
        strict: true // değişik bir ifade görürse (@,! veya : gibi) bunları görmezden gelir
    });
    next();  // Bir sonraki middleware'e geçmesi için kullanıyoruz.
})

const Course = mongoose.model('Course', CourseSchema);

module.exports = Course;