﻿const childProcess = require('child_process');
const expect = require('expect.js');
const fetch = require('node-fetch');
const { printMessage } = require('./common/techio');

describe('le serveur devrait', () => {

  let server;

  after(() => {
    try {
      server.kill();
    } catch(err) {}
  });

  it(`s'exécuter sans erreur`, () => {
    // load and run student code
    server = childProcess.fork('./3-param-get.js');
  });

  it(`accepter une requête HTTP GET à la racine`, async function() {
    this.retries(3);
    await new Promise(resolve => setTimeout(resolve, 1000)); // wait one (more) second
    await fetch('http://localhost:3000/')
  });

  it(`répond "Bonjour !" quand il reçoit une requête HTTP GET à la racine`, async function() {
    const res = await fetch('http://localhost:3000/')
    expect(await res.text()).to.be('Bonjour !');
  });

  const cases = [
    { path: `/hello?nom=Sasha`, expected: `Bonjour, Sasha !` },
    { path: `/hello?nom=Michel`, expected: `Bonjour, Michel !` },
    { path: `/hello`, expected: `Quel est votre nom ?` },
    { path: `/hello?nom=Coco`, expected: `Bonjour, Coco !` }
  ];
  
  cases.forEach(({ path, expected }) => 
    it(`répond "${expected}" quand il reçoit une requête HTTP GET ${path}`, async function() {
      const res = await fetch(`http://localhost:3000${path}`)
      expect(await res.text()).to.be(expected);
    })
  );

  it('remplir tous les critères demandés', () => {
    printMessage(`👌 Nickel ! Ton code valide tout ce qui était demandé !`);
    printMessage(`Tu peux passer à l'exercice suivant.`);
  });
  
});

