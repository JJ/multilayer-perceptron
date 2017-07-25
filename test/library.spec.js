/*global describe, it, before */

import chai from 'chai';
import { MultilayerPerceptron } from '../src/MultilayerPerceptron.js';

chai.expect();

const expect = chai.expect;

let lib;

describe('Given MLP was initialized with three layers',  () => {
  before(() => {
    lib = new MultilayerPerceptron(2,[2],1);
    //let inputlayer = lib.inputLayer;
   // console.log(inputLayer);
 });
  describe('and when I want to know number of layers', () => {
    it('it should return number three', () => {
      expect(lib.layersCount).to.be.equal(3);
    });
  });

  describe('and when I to retrieve the input layer', () => {
    it('it should return the input layer', () => {
      expect(lib.inputLayer).to.exist;
    });
  });

});
