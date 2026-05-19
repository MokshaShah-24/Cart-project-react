import React from "react";

export default function Product(props) {
  return (
    <div className="row mt-3">
      <div className="col-5">
        <img src={props.product.img} alt="product" width="150" />
        <h2>
          {props.product.name}

          <span className="badge text-bg-secondary">
            ₹{props.product.price}
          </span>
        </h2>
      </div>

      <div className="col-3">
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => props.decrementQuantity(props.i)}
        >
          -
        </button>

        <button type="button" className="btn btn-warning">
          {props.product.quantity}
        </button>

        <button
          type="button"
          className="btn btn-danger"
          onClick={() => props.incrementQuantity(props.i)}
        >
          +
        </button>
      </div>

      <div className="col-2">
        {props.product.price * props.product.quantity}
      </div>

      <div class="d-grid gap-2 col-6 mx-auto">
        <button
          class="btn btn-warning"
          type="button"
          onClick={() => props.removeItem(props.i)}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
