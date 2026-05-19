import React, { useState } from 'react';

function AddItem(props) {

    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();

        props.addItem(
            productName,
            Number(productPrice)
        );

        // Optional: clear inputs after adding
        setProductName("");
        setProductPrice(0);
    };

    return (

        <form className='row mb-5' onSubmit={handleSubmit}>

            <div className='mb-3 col-4'>

                <label
                    htmlFor='inputName'
                    className='form-label'
                >
                    Name
                </label>

                <input
                    type='text'
                    className='form-control'
                    id='inputName'
                    name='productname'
                    value={productName}
                    onChange={(e) =>
                        setProductName(e.target.value)
                    }
                />

            </div>

            <div className='mb-3 col-4'>

                <label
                    htmlFor='inputPrice'
                    className='form-label'
                >
                    Price
                </label>

                <input
                    type='number'
                    className='form-control'
                    id='price'
                    name='productPrice'
                    value={productPrice}
                    onChange={(e) =>
                        setProductPrice(e.target.value)
                    }
                />

            </div>

            <button
                type='submit'
                className='btn btn-primary col-4'
            >
                Add
            </button>

        </form>
    );
}

export default AddItem;