import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div>
            <p className='f3'>
                {'This function will detect faces in your picture.'}
            </p>
            <div className='centre'>
            <div className='form centre pa4 br3 shadow-5'>
                <input className='f4 pa2 w-70 center' type='tex' onChange={onInputChange} />
                <button
                    onClick={onButtonSubmit}
                    className='w-30 grow f4 link ph3 pv2 dib white bg-blue'>
                    Detect
                    </button>
            </div>
            </div>
        </div>

    );
}

export default ImageLinkForm;