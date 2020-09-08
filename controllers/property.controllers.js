const Property = require("../models/property.model");
const Schedule = require("../models/schedule.model");
const Customer = require("../models/customer.model");
const dateFormat = require("dateformat");
const passport = require("passport");

//Función creadora de Schedules para un local
function createSchedule(property) {
    const timeRanges = property.openingHours;
    const bookTime = property.bookingDuration;
    var scheduleObject = {
        property: property._id,
        timeBoxes: []
    };
    let newSchedule;
    timeRanges.forEach((timeRange) => {
        const openDays = (timeRange.openingDays.closingDay.getTime() - timeRange.openingDays.openingDay.getTime()) / (1000 * 3600 * 24);
        const weekDays = timeRange.weekDays;
        var currentDay = timeRange.openingDays.openingDay;
        for (let i = 0; i < openDays; i++) {
            if (weekDays.includes(currentDay.getDay())) {
                timeRange
                    .openingTimes
                    .forEach((opening) => {
                        var interval = bookTime / 60;
                        let hours = opening.closingTime - opening.openingTime;
                        let total = hours / interval;
                        let t = opening.openingTime;
                        let rest = 0;
                        let startTime = t + rest;
                        var timeBox = {
                            day: currentDay,
                            startTime: startTime,
                            status: true,
                            remaining: property.availablePlaces,
                            total: property.availablePlaces
                        };
                        for (let j = 0; j < total; j++) {
                            t = t + bookTime / 100;
                            if (t - Math.floor(t) >= 0.6) {
                                let rest = t - Math.floor(t) - 0.6;
                                t = Math.floor(t) + rest + 1;
                            }
                            timeBox = {
                                day: new Date(currentDay),
                                startTime: startTime
                                    .toFixed(2)
                                    .replace(".", ":"),
                                status: true,
                                remaining: property.availablePlaces,
                                total: property.availablePlaces
                            };
                            console.log("TimBox:" + timeBox);
                            scheduleObject
                                .timeBoxes
                                .push(timeBox);
                            startTime = t + rest;
                        }
                    });
                newSchedule = JSON.parse(JSON.stringify(scheduleObject));

                currentDay.setDate(currentDay.getDate() + 1);
            } else {
                currentDay.setDate(currentDay.getDate() + 1);
            }
        }
    });
    Schedule.create(newSchedule, (err) => {
        if (err) {
            throw err;
        }
        console.log(`Created ${scheduleObject.property} schedules`);
    });
}
//POST Creación del local
exports.registerProperty = (req, res, next) => {
    console.log('this is req', req)
    console.log('this is the property body', req.body);
    const data = req.body.body
    const workingDays = [];
    if (data.openingHours[0].weekDays.includes(1)) {
        workingDays.push(1);
    }
    if (data.openingHours[0].weekDays.includes(2)) {
        workingDays.push(2);
    }
    if (data.openingHours[0].weekDays.includes(3)) {
        workingDays.push(3);
    }
    if (data.openingHours[0].weekDays.includes(4)) {
        workingDays.push(4);
    }
    if (data.openingHours[0].weekDays.includes(5)) {
        workingDays.push(5);
    }
    if (data.openingHours[0].weekDays.includes(6)) {
        workingDays.push(0);
    }
    if (data.openingHours[0].weekDays.includes(0)) {
        workingDays.push(0);
    }
    const sessionUser = req.session.currentUser || req.user;
    console.log(sessionUser,'SessionUser')
    const dataProperty = {
        owner: sessionUser,
        name: data.name,
        description: data.description,
        categories: data.categories,
        mainImage: data.mainImage,
        media: data.media,
        location: {
            name: data.location.name,
            lat: data.location.lat,
            long: data.location.long
        },
        openingHours: [
            {
                openingDays: {
                    openingDay: data.openingHours[0].openingDays.openingDay,
                    closingDay: data.openingHours[0].openingDays.closingDay
                },
                weekDays: workingDays,
                openingTimes: [
                    {
                        openingTime: data.openingHours[0].openingTimes[0].openingTime,
                        closingTime: data.openingHours[0].openingTimes[0].closingTime
                    }
                ]
            }
        ],
        bookingDuration: data.bookingDuration,
        availablePlaces: data.availablePlaces
    };
    console.log(data.mainImage)
    if (req.file) {
        dataProperty.mainImage = data.mainImage;
    }
    console.log('datapropety', dataProperty)
    Property
        .create(dataProperty)
        .then((property) => {
            createSchedule(property);
            console.log(sessionUser,'SessionUser')
            Customer.findByIdAndUpdate(sessionUser._id, {
                $push: {
                    ownProperties: property._id
                }
            }, {new: true}).then((customer) => {
                console.log(customer);
            }).catch((error) => {
                console.log("Error: ", error);
            });
            res
                .status(200)
                .json(property)
        });
};
//Ver detalle del local
exports.viewProperty = (req, res, next) => {
    console.log('Hola', req.isAuthenticated())
    console.log(req.params)

    const sessionUser = req.session.currentUser || req.user;
    console.log(sessionUser)
    if (sessionUser) {
        const p1 = Customer.findById(sessionUser._id);
        const p2 = Property.findById(req.params.propertyId);
        Promise
            .all([p1, p2])
            .then((resultados) => {
                const favourites = resultados[0].favourites;
                const property = resultados[1];
                const openingDay = property.openingHours[0].openingDays.openingDay;
                const closingDay = property.openingHours[0].openingDays.closingDay;
                const formatOpening = dateFormat(openingDay, "dd/mm/yyyy");
                const formatClosing = dateFormat(closingDay, "dd/mm/yyyy");
                const weekDays = property.openingHours[0].weekDays;
                const weekDaysFormat = [];
                weekDays.forEach((day) => {
                    switch (day) {
                        case 1:
                            weekDaysFormat.push("Lunes");
                            break;
                        case 2:
                            weekDaysFormat.push("Martes");
                            break;
                        case 3:
                            weekDaysFormat.push("Miércoles");
                            break;
                        case 4:
                            weekDaysFormat.push("Jueves");
                            break;
                        case 5:
                            weekDaysFormat.push("Viernes");
                            break;
                        case 6:
                            weekDaysFormat.push("Sábado");
                            break;
                        case 7:
                            weekDaysFormat.push("Domingo");
                    }
                });
                console.log(property.openingHours[0].openingTimes[0]);
                res
                    .status(200)
                    .json(property);
                // res.render("property/property-details", {     property: property,     title:
                // `${property.name} | KOKOMO`,     user: resultados[0],     favourites:
                // favourites,     openingDay: formatOpening,     closingDay: formatClosing,
                // weekDays: weekDaysFormat,     openingTime:
                // property.openingHours[0].openingTimes[0].openingTime,     closingTime:
                // property.openingHours[0].openingTimes[0].closingTime, });
            })
            .catch((error) => {
                console.log("Error: ", error);
            });
    } else {
        Property
            .findById(req.params.propertyId)
            .then((resultados) => {
                const property = resultados;
                console.log(resultados)
                const openingDay = property.openingHours[0].openingDays.openingDay;
                const closingDay = property.openingHours[0].openingDays.closingDay;
                const formatOpening = dateFormat(openingDay, "dd/mm/yyyy");
                const formatClosing = dateFormat(closingDay, "dd/mm/yyyy");
                const weekDays = property.openingHours[0].weekDays;
                const weekDaysFormat = [];
                weekDays.forEach((day) => {
                    switch (day) {
                        case 1:
                            weekDaysFormat.push("Lunes");
                            break;
                        case 2:
                            weekDaysFormat.push("Martes");
                            break;
                        case 3:
                            weekDaysFormat.push("Miércoles");
                            break;
                        case 4:
                            weekDaysFormat.push("Jueves");
                            break;
                        case 5:
                            weekDaysFormat.push("Viernes");
                            break;
                        case 6:
                            weekDaysFormat.push("Sábado");
                            break;
                        case 0:
                            weekDaysFormat.push("Domingo");
                    }
                });
                console.log(property.openingHours[0].openingTimes[0]);
                res
                    .status(200)
                    .json(property);
                // res.render("property/property-details", {     property: property,     title:
                // `${property.name} | KOKOMO`,     openingDay: formatOpening,     closingDay:
                // formatClosing,     weekDays: weekDaysFormat,     openingTime:
                // property.openingHours[0].openingTimes[0].openingTime,     closingTime:
                // property.openingHours[0].openingTimes[0].closingTime,     layout:
                // 'layout-nouser' });
            })
            .catch((error) => {
                console.log("Error: ", error);
            });
    }
};
//Editar Local
exports.editProperty = (req, res, next) => {
    const sessionUser = req.session.currentUser || req.user;
    Property
        .findById(req.params.id)
        .then((resultado) => {
            console.log(resultado.openingHours[0]);
            res.render("property/edit-property", {
                property: resultado,
                title: `Editar ${resultado.name} | KOKOMO`,
                user: sessionUser,
                weekDays: resultado.openingHours[0].weekDays,
                openingTimes: resultado.openingHours[0].openingTimes[0],
                openingDays: resultado.openingHours[0].openingDays
            });
        })
        .catch((error) => {
            console.log("Error: ", error);
        });
};
//Guardar cambios del local
exports.saveProperty = (req, res, next) => {
    console.log(req.body);
    const workingDays = [];
    if (req.body.monday) {
        workingDays.push(req.body.monday);
    }
    if (req.body.tuesday) {
        workingDays.push(req.body.tuesday);
    }
    if (req.body.wednesday) {
        workingDays.push(req.body.wednesday);
    }
    if (req.body.thursday) {
        workingDays.push(req.body.thursday);
    }
    if (req.body.friday) {
        workingDays.push(req.body.friday);
    }
    if (req.body.satuday) {
        workingDays.push(req.body.saturday);
    }
    if (req.body.sunday) {
        workingDays.push(req.body.sunday);
    }
    const sessionUser = req.session.currentUser || req.user;
    const dataProperty = {
        owner: sessionUser,
        name: req.body.name,
        description: req.body.description,
        categories: [req.body.categories],
        media: [req.body.media],
        location: {
            name: req.body.ubication,
            lat: req.body.latitude,
            long: req.body.longitude
        },
        openingHours: [
            {
                openingDays: {
                    openingDay: req.body.opening,
                    closingDay: req.body.closing
                },
                weekDays: workingDays,
                openingTimes: [
                    {
                        openingTime: req.body.openhour,
                        closingTime: req.body.closehour
                    }
                ]
            }
        ],
        bookingDuration: req.body.duration,
        availablePlaces: req.body.places
    };
    if (req.file) {
        dataProperty.mainImage = req.file.path;
    }
    Property
        .findByIdAndUpdate(req.params.id, dataProperty, {new: true})
        .then((property) => {
            createSchedule(property);
            res.render("property/property-details", {
                title: "Local creado | KOKOMO",
                layout: "layout",
                user: sessionUser,
                property
            });
        })
        .catch((error) => {
            console.log("Error: ", error);
        });
};
//Añadir un favorito
exports.loveProperty = (req, res, next) => {
    const sessionUser = req.session.currentUser || req.user;
    console.log("ID DE LA PROPERTY: ", req.params.propertyId)
    if (sessionUser) {
        Property
            .findById(req.params.propertyId)
            .then((resultado) => {
                console.log(resultado)
                return Customer.update({
                    _id: sessionUser._id,
                    favourites: {
                        $ne: resultado
                    }
                }, {
                    $addToSet: {
                        favourites: resultado
                    }
                }, {new: true});
            })
            .then((customer) => {
                console.log("Usuario actualizado", customer);
                const favourites = customer
                res
                    .status(200)
                    .json(favourites);
            })
            .catch((error) => {
                console.log("Error: ", error);
            });
    }

};
//Añadir comentario
exports.addComment = (req, res) => {
    const sessionUser = req.session.currentUser || req.user;
    const newComment = {
        username: sessionUser.username,
        comment: req.body.comment
    };
    Property.findByIdAndUpdate(req.params.propertyId, {
        $push: {
            comments: newComment
        }
    }, {new: true}).then((propertyUpdated) => {
        console.log(propertyUpdated);
        res.status(200).json(propertyUpdated);
    });
};