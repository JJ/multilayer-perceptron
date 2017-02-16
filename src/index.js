class InputLayer {

  constructor(neuronCount) {
    this.neuronCount = neuronCount;
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
}

