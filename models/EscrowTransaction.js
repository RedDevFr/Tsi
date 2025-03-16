// src/models/EscrowTransaction.js

class EscrowTransaction {
  constructor(id, productId, buyerId, sellerId, amount, status, type) {
    this.id = id;
    this.productId = productId;
    this.buyerId = buyerId;
    this.sellerId = sellerId;
    this.amount = amount;
    this.status = status;
    this.type = type; // "smart contract" ou "physique"
  }
}

export default EscrowTransaction;