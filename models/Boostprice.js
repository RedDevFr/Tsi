// src/models/BoostPrice.js

class BoostPrice {
  constructor(level, price, duration, features) {
    this.level = level; // "bronze", "argent", "or"
    this.price = price;
    this.duration = duration; // en jours
    this.features = features; // Tableau de chaînes décrivant les fonctionnalités
  }
}

export default BoostPrice;