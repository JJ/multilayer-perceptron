var Axon = {};

Axon.new = function() {
	return {
		outboundDendrites: [],
		fire:function(value) {
			var activationValue = this.calculateActivationValue(value);
			var dendrites = this.getOutboundDendrites();
			for (var i = 0; i < dendrites.length; i++) {
				var dendrite = dendrites[i];
				dendrite.fire(activationValue);
			}		
		},
		getOutboundDendrites: function() {
			return this.outboundDendrites;
		},
		addOutboundDendrite: function(dendrite) {
			this.outboundDendrites.push(dendrite);
		},
		//Sigmoid activation function
		calculateActivationValue: function(value) {
			return 1/(1+Math.pow(Math.E, -value));
		}
	};
};


class Axon {
  
  constructor() {
    this._outboundDendrites = [];
  }
 
  get outboundDendrites() {
    return this._outboundDendrites;
  }
 
  fire() {
    let activationValue = this.calculateActivationValue(value);
    let dendrites = this.outboundDendrites;
    
    for (let i = 0; i < dendrites.length; i++) { 
       let dendrite = dendrites[i];
       dendrite.fire(activationValue);
    }
  }
}



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

