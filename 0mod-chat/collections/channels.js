Channels = new Mongo.Collection( 'channels' );

Channels.allow({
  insert: () => false,
  update: () => false,
  remove: () => false
});

Channels.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});

let ChannelsSchema = new SimpleSchema({
  'name': {
    type: String,
    label: 'O nome do canal.'
  }
});

Channels.attachSchema( ChannelsSchema );
