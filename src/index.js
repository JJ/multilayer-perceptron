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


class NeuronLayer {
  constructor(neuronCount) {
    this._neuronCount = neuronCount;
  }
}

class InputLayer extends NeuronLayer {

  constructor(neuronCount) {
    super(neuronCount);
  }

  fire(inputValues) {
    let dendrites = this.getDendrites();

    // make sure that the input value count matches the dendrite count
    if (dendrites.length !== inputValues.length) {
      throw new Error('InputLayer: invalid input value array');
    }

    for (let i = 0; i < dendrites.length; i++) {
      let dendrite = dendrites[i];
      let inputValue = inputValues[i];

      dendrite.fire(inputValue);
    }
  }

  getDendrites() {
    const neurons = this.getNeurons();
    let allDendrites = [];

    for (let i = 0; i < neurons.length; i++) {
      let neuron = neurons[i];
      let dendrites = neuron.getInboundDendrites();

      allDendrites = allDendrites.concat(dendrites);
    }
    return allDendrites;
  }
}

export default class MultilayerPerceptron {

  constructor(neuronCounts) {
    this._neuronCounts = neuronCounts;
    this._inputLayer = new InputLayer(neuronCounts[0]);
  }

  get neuronCounts() {
    return this._neuronCounts;
  }

  get layersCount() {
    return this._neuronCounts.length;
  }

  get inputLayer() {
    return this._inputLayer;
  }
}

