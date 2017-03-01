
//TODO add missing methods

class Neuron = {
  
  constructor() {
    this._dendrites = [];
    this._dendriteValues = [];
    this._axon = new Axon();
  }
  
  get axon() {
    return this._axon;
  }
  
  addInboundDendrite(newDendrite) {
    this._dendrites.push(newDendrite);
  }
  
}


