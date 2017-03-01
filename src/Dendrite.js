class Dendrite {
  
  constructor(neuron) {
    this._neuron = neuron;
    this._weight = Math.random();
    this._loaded = true;
  }
  
  fire(inboundValue) {
    if (!this._loaded) {
      return;
    } 
    this._loaded = false;
    let outboundValue = inboundValue * this._weight;
    this._neuron.addDendriteValue(outboundValue);
  }
  reload() {
    this._loaded = true;
  }
}


