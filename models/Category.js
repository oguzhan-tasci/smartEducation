const mongoose = require('mongoose');
const slugify = require('slugify');


const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        unique: [true, 'Your name should be same with others!'],
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    slug: {
        type: String,
        unique: true
    }
})

CategorySchema.pre('validate', function (next) {
    this.slug = slugify(this.name, {
        lower: true,
        strict: true
    })
    next();
})

const Category = mongoose.model('Category', CategorySchema);
module.exports = Category;