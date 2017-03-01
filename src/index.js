export default class MultilayerPerceptron {

  constructor(inputNeuronCount, hiddenLayerNeuronCounts, outputLayerNeuronCount) {
    this._inputLayer = new InputLayer(inputNeuronCount);
    this._outputLayer = new OutputLayer(outputNeuronCount);
    this._hiddenLayers = []; 
   
    for (let i = 0; i < hiddenLayerNeuronCounts.length; i++) {
      let hiddenLayerNeuronCount = hiddenLayerNeuronCounts[i];
      let hiddenLayer = new HiddenLayer(hiddenLayerNeuronCount);
      this._hiddenLayers.push(hiddenLayer);
    }  
  }

  get inputLayer() {
    return this._inputLayer;
  }
}

