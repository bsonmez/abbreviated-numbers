const Abbreviated = {
  /**
   * @param {Number} value
   * 
   * @returns {number}
   */
  length(value) {
    let len = 0;
    while (value > 1) {
      len += 1;
      value /= 10;
    }
    return len;
  },



    /**
   * @param {Number} value
   * 
   * @returns {String}
   */
  get(value) {
    const len = this.length(value);

    if (len <= 3) return value;

    if (len > 3 && len <= 6) {
      return `${value.toString().substr(0, len - 3)}K`;
    }

    if (len > 6 && len <= 9) {
      return `${value.toString().substr(0, len - 6)}M`;
    }

    if (len > 9 && len <= 12) {
      return `${value.toString().substr(0, len - 9)}B`;
    }

    if (len > 12 && len <= 15) {
      return `${value.toString().substr(0, len - 12)}T`;
    }

    if (len > 15 && len <= 18) {
      return `${value.toString().substr(0, len - 15)}q`;
    }

    if (len > 18 && len <= 21) {
      return `${value.toString().substr(0, len - 18)}Q`;
    }
    return value;
  },

  
    /**
   * @param {Number} amount
   * @param {Number} len
   * 
   * @returns {number}
   */
  fixed(amount, len = 2) {
    if(len>0){
      let x = parseFloat(amount).toFixed(len);
      let [a, b] = x.split(".");
      b = b.substr(0, len);
      return parseFloat(`${a}.${b}`);
    }
    return parseInt(amount);
  }
};

module.exports = { Abbreviated };
