// SHOW 
router.get('/:userId', (req, res) => {

    // define the user's ID
    const thisUserId = req.params.userId
    // find the user based on the ID 
    User.findById(thisUserId)
        // then take that user being shown
        .then((shownUser) => {
            // render its information using the USER SHOW view
            res.render('user/show', {
                // the view will receive the UserID and shownUser Object
                thisUserId,
                shownUser
            })
        })
        .catch((err) => res.send(err))
})


// INDEX
trainerRouter.get('/', (req, res) => {

    // const userId = req.params.userId
    // let currentUser = User.findById(userId)

    User.findById(req.params.userId)
        .then((user) => {
            // listOfTrainers = user.trainers
            user = user
            listOfTrainers = user.trainers
            // returned an [array]
            res.render('trainer/index', {
                user,
                listOfTrainers
            })
        })
        .catch((err) => res.send(err))
})

const parentShowChildIndex = (req, res) => {

    User.findById(req.params.userId)
        .then((foundUser) => {
            res.render(`${modelName}/${route}`)
        })
}

restfulRequest = {
    index: 'get',
    new: 'get',
    create: 'post',
    show: 'get',
    edit: 'get',
    update: 'put',
    delete: 'delete'
}

restfulRoute = {
    index: '/',
    new: '/new',
    create: '/',
    show: '/:id',
    edit: '/:id/edit',
    update: '/:id',
    delete: '/:id'
}

restfulResponse = {
    index: 'res.render',
    new: 'res.render',
    create: 'res.redirect',
    show: 'res.render',
    edit: 'res.render',
    update: 'res.redirect',
    delete: 'res.redirect'
}

// condition for REQUESTS
if (req = 'get'){
    res = res.render
} else {
    res = res.redirect
}

// conditions for ROTUES
if (route === index || create) {
    route = '/'
} else if (route === show || update || deLete) {
    route = '/:id'
} else if (route === new) {
    route = '/new'
} else if (route === edit) {
    route = '/:id/edit'
}


const controllerMaker = (modelName, modelArray) => {
    const place
    for (index in modelArray) {
        if (modelArray[place] === 'index' || 'create' || 'new' || 'edit') {
            if (modelArray[place] === 'index' || 'create'){
                scope[modelName]router.get('/', (req, res) => {})
            } else if (modelArray[place] === 'new') {
                (window[modelName]router).get
            }
            route = '/'
        } else if (modelArray[place] === show || update || deLete) {
            route = '/:id'
        }
        
}