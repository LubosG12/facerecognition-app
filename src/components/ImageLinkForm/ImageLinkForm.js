import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
    <p className="f3">
    {'This magic brain will detect faces in your pictures, give it a try!'}
    </p>
    <div className='center'>
      <div className='pa4 br3 shadow-5 imagelinkform center'>
        <input placeholder="Link (https://starbyface.com/ImgBase/testPhoto/test2.jpg)" className="w-70 f4 pa2 f7 lh-copy" type='text' onChange={onInputChange}/>
        <button  className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple" onClick={onButtonSubmit}>Detect</button>
      </div>
    </div>
    </div>

  )
}

export default ImageLinkForm;
