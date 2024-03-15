import React from 'react';

function BecomePremiumModal({ showModal, setShowModal, handleGoPremium }) {
  return (
    <>
      {showModal ? (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowModal(false)}>&times;</span>
            <h2>Become Premium Member</h2>
            <p>Unlock premium features and benefits.</p>
            <button onClick={handleGoPremium}>Go Premium</button>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default BecomePremiumModal;
