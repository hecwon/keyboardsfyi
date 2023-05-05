import * as cases from './case.js';
import * as keycaps from './keycaps.js';
import * as plates from './plates.js';
import * as stabs from './stab.js';
import * as switches from './switch.js';

module.exports = {
  keyboard1: {
    keyboardIdPK: 1,
    case: cases[0].model,
    keycap: keycaps[0],
    plate: plates[0],
    stab: stabs[0],
    switch: switches[0],
    user: 'hector',
    recDevice: 'iPhone 13',
    title: 'sweet new qk60',
    createdAt: new Date(),
    commentsCount: 5,
    commentsFK: 1,
    upvotesFK: 1,
  },

  keyboard2: {
    keyboardIdPK: 2,
    case: cases[1].model,
    keycap: keycaps[1],
    plate: plates[1],
    stab: stabs[1],
    switch: switches[1],
    user: 'hector',
    recDevice: 'rode pod mic',
    title: 'oldie but goodie',
    createdAt: new Date(),
    commentsCount: 10,
    commentsFK: 2,
    upvotesFK: 2,
  },

  keyboard3: {
    keyboardIdPK: 3,
    case: cases[1].model,
    keycap: keycaps[2],
    plate: plates[3],
    stab: stabs[0],
    user: 'greg',
    recDevice: 'iphone 100',
    title: 'what yall think?',
    switch: switches[2],
    commentsCount: 7,
    commentsFK: 3,
    upvotesFK: 3,
  }
}