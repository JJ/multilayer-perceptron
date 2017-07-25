import { InputLayer } from './InputLayer.js'
import { OutputLayer } from './OutputLayer.js'

export class MultilayerPerceptron {

  constructor(inputNeuronCount, hiddenLayerNeuronCounts, outputLayerNeuronCount) {
    this._inputLayer = new InputLayer(inputNeuronCount);
    this._outputLayer = new OutputLayer(outputLayerNeuronCount);
    this._hiddenLayers = [];

    for (let i = 0; i < hiddenLayerNeuronCounts.length; i++) {
      let hiddenLayerNeuronCount = hiddenLayerNeuronCounts[i];
      let hiddenLayer = new InputLayer(hiddenLayerNeuronCount);
      this._hiddenLayers.push(hiddenLayer);
    }
  }

  get inputLayer() {
    return this._inputLayer;
  }

  get layersCount() {
    return this._hiddenLayers.length + 2
  }
}
