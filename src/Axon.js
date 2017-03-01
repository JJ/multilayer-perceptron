class Axon {
  
  constructor() {
    this._outboundDendrites = [];
  }

  
  calclulateActivationValue(value) {
    return 1/(1+Math.pow(Math.E, -value));
  }
  
  addOutboundDendrite(dendrite) {
    this._outboundDendrites.push(dendrite);
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
