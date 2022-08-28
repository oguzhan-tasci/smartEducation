const Course = require('../models/Course');

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
        const courses = await Course.find({});

        res.status(200).render('courses', { // res.render('gidilecek sayfa', {sayfaya gönderilecek informations})
            courses,
            page_name: 'courses'
        })
    } catch (error) {
        conosle.log(error);
    }
}
exports.getCourse = async (req,res) => {
    try {
        const CourseSlug = req.params.slug;
        const course = await Course.findOne({slug : CourseSlug});
        res.render('course',{
            course,
        })
    } catch (error) {
        
    }
}