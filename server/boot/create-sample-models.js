var async = require('async');

module.exports = function(app) {
  //data sources
  var mongoDs = app.dataSources.mongoDs;
  //create all models
  createRelationships(function(err, relationships) {
    if (err) throw err;
    async.parallel({
      people: async.apply(createPeople),
      tasks: async.apply(createTasks),
    }, function(err, results) {
      if (err) throw err;
      createAssignedTasks(results.tasks, results.people, function(err) {
        console.log('> models created successfully');
      });
    });
  });

  //create relationships
  function createRelationships(cb) {
    mongoDs.automigrate('Relationship', function(err) {
      if (err) return cb(err);
      var Relationship = app.models.Relationship;
      Relationship.create([
        {
          currency: '$',
        },
        {
          currency: 'Dragons',
        }
      ], cb);
    });
  }

  //create people
  function createPeople(relationships, cb) {
    mongoDs.automigrate('Person', function(err) {
      if (err) return cb(err);
      var People = app.models.People;
      People.create([
        {
          email: 'walter.white@gmail.com',
          password: 'iamthedanger',
          relationshipId: relationships[0].id
        },
        {
          email: 'skyler.white@yahoo.fr',
          password: 'annoying'
          relationshipId: relationships[0].id
        },
        {
          email: 'khaleesi@gmail.com',
          password: 'wherearemydragons',
          relationshipId: relationships[1].id
        },
        {
          email: 'daario.naharis@hotmail.com',
          password: 'realthug',
          relationshipId: relationships[1].id
        },
        {
          email: 'jorah.mormont@gmail.com',
          password: 'khaleesi'
        }
      ], cb);
    });
  }

    //create tasks
    function createTasks(relationships, cb) {
      mongoDs.automigrate('Task', function(err) {
        if (err) return cb(err);
        var Task = app.models.Task;
        Task.create([
          {
            name: 'Money Laundring',
            description: 'Laser game or car wash ?',
            price: 100,
            relationshipId: relationships[0].id
          },
          {
            name: 'Cooking meth',
            description: '99% purity required',
            price: 2000
            relationshipId: relationships[0].id
          },
          {
            name: 'Feeding the dragons',
            description: 'Watch out for the hands',
            price: 10000,
            relationshipId: relationships[1].id
          },
          {
            name: 'Freeing slaves',
            description: 'Is it really freeing though ?',
            price: 2,
            relationshipId: relationships[1].id
          }
        ], cb);
      });
    }

    //create assigned tasks
    function createAssignedTasks(tasks, people, cb) {
      mongoDs.automigrate('Task', function(err) {
        if (err) return cb(err);
        var AssignedTask = app.models.AssignedTask;
        AssignedTask.create([
          {
            finished: 0,
            taskId: tasks[1].id,
            personId: people[0].id
          }
        ], cb);
      });
    }
};
