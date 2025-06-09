class PercentageDiscount {
  constructor(percent) {
    this.percent = percent;
  }

  apply(total) {
    return total * (1 - this.percent / 100);
  }
}

export default PercentageDiscount;
