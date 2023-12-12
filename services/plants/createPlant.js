const Plant = require('../../models/plant')


const createPlant = (req, res, next) => {
    const plant_name = req.body.plant_name
    const product_name = req.body.product_name
    const plant_variant = req.body.variant
    console.log(plant_variant)

    const plant = new Plant({
        product_name: product_name,
        plant_name: plant_name,
        variant: [plant_variant]
    })

    plant.save().then((plant) => {
        res.send(plant)
    }).catch((err) => {
        console.log(err)
        res.status(400).send(err.message)
    })
};

module.exports = createPlant;