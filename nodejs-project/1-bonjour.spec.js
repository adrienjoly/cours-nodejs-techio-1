﻿//const assert = require('assert');
const expect = require('expect.js');
const { congratulateStudent } = require('./common/techio');

const logged = [];
let consoleLogAppelé = false;

describe('le programme devrait', () => {

  it(`s'exécuter sans erreur`, () => {
    const actualConsoleLog = console.log; // backup console
    // mock console
    console.log = function (param) {
      consoleLogAppelé = true;
      logged.push(param);
    };
    require('./1-bonjour.js'); // load and run student code
    console.log = actualConsoleLog; // restore console
  });

  it('écrire dans la console', () => {
    //assert(consoleLogAppelé);
    expect(consoleLogAppelé).to.be(true);
  })

  it('afficher le mot "hello"', () => {
    //assert(/hello/i.test(logged.join()));
    expect(logged.join()).to.match(/hello/i);
  })

  it('afficher le mot "world"', () => {
    //assert(/world/i.test(logged.join()));
    expect(logged.join()).to.match(/world/i);
  })

  it('respecter à la lettre le message demandé', () => {
    //assert.strictEqual(logged.join(), "Hello World");
    expect(logged.join()).to.be("Hello World");
    congratulateStudent();
  })
});
