
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dream').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('dream').insert({id: 1, term: 'mother', interpretation:'To see Voldemort in your dream symbolizes an ever-present evil force working against you. To dream that you are Voldemort represents the darker, sinister side of your personality. You are capable of accomplishing great feats, but with questionable motives and methods. ',image_url:'http://dailybruin.com/images/46611_studio_ghibli_courtesy_arto.jpg'}),
        knex('dream').insert({id: 2, term: 'job interview',interpretation:'If in your last night’s dream, you thought that you are Thor and can control lightning and strike it anytime you want, it means that you might kill your boss in the coming future and make it look like a natural disaster! Can it get more innovative than that?',image_url:'https://i.kinja-img.com/gawker-media/image/upload/s--_UA_stoI--/c_scale,fl_progressive,q_80,w_800/cauu7dunocupp7cafcki.jpg'}),
        knex('dream').insert({id: 3, term: 'chocolate',interpretation:'Dreaming about oversized sumo-wrestlers? Stop eating chocolate bars before you go to sleep. This dream tells you about your eating disorder.',image_url:'https://lh6.googleusercontent.com/P9_schrW6QRg8vo1AlVbrNePrKK-T-M0tnYO6AnJVOJ7o7okzlOJUkBcMHCXlvfDDaBA8A0S9B3vaGS6MQz_2lvyCrDWLtfZCwwws8ZH4Vrs1ZKjAti4hxSn'}),
        knex('dream').insert({id: 4, term: 'bad date',interpretation:'If one sees himself burying dates in a dream, it also means stealing from the property and money of orphans.',image_url:'https://s-media-cache-ak0.pinimg.com/564x/b4/a7/22/b4a722b112299da0bdb0a71cc61c542d.jpg'}),
        knex('dream').insert({id: 5, term: 'public speaking',interpretation:'To see a mob in your dream represents chaos and disorganization. Your are experiencing a conflict in ideas and interest. It is time to be more assertive and take control of your life.',image_url:'https://qph.ec.quoracdn.net/main-qimg-551b7834fcf05f93bd82bfbe4aad6932?convert_to_webp=true'})
      ]);
    });
};
