Meteor.startup( () => Modules.both.startup() );

if (Meteor.isClient) {
  //console.log('is running ');
  //Session.set('studyId', null);
}