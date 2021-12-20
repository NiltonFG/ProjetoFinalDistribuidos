exports.notFound = (req, res) => {
    res.status(404).render('notFound', {
        pageTitle: 'Page not found',
        activeShop: true,
        activeProduct: false,
        path:'notFound'
    });
};