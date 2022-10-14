import { useId } from 'react';
import Alert from '../../Components/Alert';
import Button from '../../Components/Button/Button';
import './TokenSwap.scss';

function TokenSwap() {
  const adfId = useId();
  const vAdfId = useId();

  return (
    <div className="token-swap">
      <h2 className="token-swap__title">Token Swap</h2>
      <p className="token-swap__desc">vADF is a governance token for fair value evaluation of curated works by DAO Voting.</p>
      <form onSubmit={(event) => event.preventDefault()}>
        <div className="token-swap__convert">
          <em className="token-swap__convert-process">
            <span className="a11y">ADF to vADF</span>
          </em>
          <div className="token-swap__convert-item">
            <span className="token-swap__convert-balance">
              Balance : 423.00
              <em>Max</em>
            </span>
            <label htmlFor={adfId} className="token-swap__convert-label">
              <em className="token-swap__convert-type">ADF</em>
              <input id={adfId} type="number" className="token-swap__convert-input" placeholder="0" min="0" />
            </label>
            <span className="token-swap__convert-info">1 ADF = 100 vADF</span>
            <span className="token-swap__convert-usd">$0.00</span>
          </div>
          <div className="token-swap__convert-item">
            <span className="token-swap__convert-balance">
              Balance : 0
            </span>
            <label htmlFor={vAdfId} className="token-swap__convert-label">
              <em className="token-swap__convert-type">vADF</em>
              <input id={vAdfId} type="number" className="token-swap__convert-input" placeholder="0" min="0" />
            </label>
            <span className="token-swap__convert-usd">$0.00</span>
          </div>
        </div>
        <Alert type="primary">
          ADF tokens and governance tokens can be used by swapping vADF at a 1:100 ratio.
          A swapped vADF does not support swapping back to ADF.
          ADF cannot be swapped in decimal units.
        </Alert>
        <Button className="token-swap__btn-submit button button--black button--default" content="SWAP" type="type1" />
      </form>
    </div>
  );
}

export default TokenSwap;
