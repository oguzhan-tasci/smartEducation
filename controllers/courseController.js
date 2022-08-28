const Course = require('../models/Course');
const Category = require('../models/Category');

exports.createCourse = async (req, res) => {
    try {
        const course = await Course.create(req.body);
        res.status(201).json({
            status: 'success',
            course
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            error
        })
    }
}

exports.getAllCourses = async (req, res) => {
    try {

        const categorySlug = req.query.categories; // url'de bulunan categories değerini alıyoruz.
        const category = await Category.findOne({
            slug: categorySlug
        });

        let filter = {};
        if (categorySlug) {
            filter = {
                category: category._id
            }
        }


        const courses = await Course.find(filter);

        const categories = await Category.find({});

        res.status(200).render('courses', { // res.render('gidilecek sayfa', {sayfaya gönderilecek informations})
            courses,
            categories, // courses sayfası içinde category bölümü de var bu yüzden categorileri de göndermemiz gerekiyor
            page_name: 'courses'
        })
    } catch (error) {
        conosle.log(error);
    }
}
exports.getCourse = async (req, res) => {
    try {
        const CourseSlug = req.params.slug;
        const course = await Course.findOne({
            slug: CourseSlug
        });
        res.render('course', {
            course,
        })
    } catch (error) {

    }
}