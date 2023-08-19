class Exception extends Error {
  constructor(message: string = "Error message") {
    super(message);
    this.message = message;
    this.name = "ErrorMessagem";
  }
}

export class UserNotFounded extends Exception {
  constructor(message: string = "Usuário não encontrado") {
    super(message);
    this.message = message;
    this.name = "UserNotFounded";
  }
}

export class ProductNotFounded extends Exception {
  constructor(message: string = "Produto não encontrado") {
    super(message);
    this.message = message;
    this.name = "ProductNotFounded";
  }
}
