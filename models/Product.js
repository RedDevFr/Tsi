// src/models/Product.js

class Product {
  constructor(id, title, description, price, category, imageUrl, isBoosted, boostLevel, boostExpiration) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.category = category;
    this.imageUrl = imageUrl;
    this.isBoosted = isBoosted;
    this.boostLevel = boostLevel;
    this.boostExpiration = boostExpiration;
  }
}

export default Product;