const express = require('express');
const router = express.Router();
const widgetController = require('./widgets');
router.get('/', widgetController.getWidgets);

const Mongoose = require('mongoose');
const widgets = Mongoose.model('widgets');

const widgetController = require('../controllers/widgets');
router.get('/', widgetController.getWidgets);

router.get('/widget/:id', (req, res, next) => {
    res.status(200).json({id: req.params.id});
});

getWidget = (req, res, next) => {
    logger.log('Getting all widgets', 'info');
    const query = Widgets.find({}, (error, widgets) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json(widgets);
        }
    })
};

createWidget = (req, res, next) => {
    logger.log('Create widget');
    let widget = new Widgets(req.body);
    widget.save().then(result => {
        res.status(200).json(result);
    });
}

postWidgets = (req, res, next) => {
    logger.log('Getting all Widgets', 'info');
    res.status(200).json('Widgets created');
};

putWidgets = (req, res, next) => {
    logger.log('Getting all Widgets', 'info');
    res.status(200).json('Widgets updated');
};

deleteWidget = (req, res, next) => {
    Widgets.remove({ _id: req.params.id }, (error, widget) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json(widget);
        }
    });
}


module.exports = widgets;
module.exports = getwidget;
module.exports = createwidget;
module.exports = deletewidget;







