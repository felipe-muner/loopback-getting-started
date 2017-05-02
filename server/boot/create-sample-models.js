module.exports = function(app) {
  app.dataSources.mysqlDs.automigrate('CoffeeShop', function(err) {
    if (err) throw err;

    app.models.CoffeeShop.create([{
      name: 'Bel Cafe',
      city: 'Vancouver',
      country: 'FR'
    }, {
      name: 'Three Bees Coffee House',
      city: 'San Mateo',
      country: 'EUA'
    }, {
      name: 'Caffe Artigiano',
      city: 'Vancouver',
      country: 'BR'
    }, ], function(err, coffeeShops) {
      if (err) throw err;

      console.log('Models created: \n', coffeeShops);
    });
  });
};
