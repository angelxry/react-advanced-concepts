import { useEffect, useRef } from "react";

export function App() {
  const cardCodeInputRef = useRef();
  const expirationInputRef = useRef();

  function handleCardNumberChange(e) {
    if (e.target.value.length >= 16) {
      cardCodeInputRef.current.focus();
    }
  }

  function handleCardCodeChange(e) {
    if (e.target.value.length >= 3) {
      expirationInputRef.current.focus();
    }
  }

  return (
    <>
      <div>
        <label>Numéro de carte</label>
        <input
          onChange={handleCardNumberChange}
          type="number"
          name="creditCardNumber"
        />
      </div>
      <div>
        <label>Code secret</label>
        <input
          ref={cardCodeInputRef}
          onChange={handleCardCodeChange}
          type="number"
          name="creditCardCode"
        />
      </div>
      <div>
        <label>Expiration</label>
        <input
          ref={expirationInputRef}
          type="text"
          name="creditCardExpiration"
        />
      </div>
    </>
  );
}
