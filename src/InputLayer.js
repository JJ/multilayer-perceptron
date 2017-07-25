import { NeuronLayer } from './NeuronLayer.js'

export class InputLayer extends NeuronLayer {

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
