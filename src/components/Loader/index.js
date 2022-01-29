import ReactDOM from 'react-dom';
import { Overlay } from './styles';

export default function Loader({ isLoading }) {
  if (!isLoading) {
    return null;
  }

  return (
    ReactDOM.createPortal(
      <Overlay>
        <div className="lds-ring">
          <div />
          <div />
          <div />
          <div />
        </div>
      </Overlay>,
      document.getElementById('loader-root'),
    )
  );
}
