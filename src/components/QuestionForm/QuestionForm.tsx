import * as React from 'react';
import { MdSend, MdOutlineDone } from 'react-icons/md';
import ClipLoader from 'react-spinners/ClipLoader';
import './QuestionForm.css';

const QuestionForm = () => {
  const [status, setStatus] = React.useState<string>('Lähetä');
  const [sending, setSending] = React.useState<boolean>(false);
  const [disabled, setDisabled] = React.useState<boolean>(true);
  const [message, setMessage] = React.useState<string>('');

  React.useEffect(() => {
    message !== '' ? setDisabled(false) : setDisabled(true);
  }, [message]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  // empties the textarea
  // timeout simulates api call
  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setMessage('');
      setSending(false);
    }, 1000);
    setStatusMessage('Kysymys lähetetty');
  };

  // sets the message of the button
  const setStatusMessage = (message: string) => {
    setStatus(message);
    setTimeout(() => {
      setStatus('Lähetä');
    }, 3000);
  };

  return (
    <div style={{ display: 'flex', position: 'relative', flexDirection: 'column' }}>
      <textarea onChange={handleChange} value={message} placeholder="Kirjoita kysymyksesi lääkärillemme." rows={5} />
      <button
        onClick={handleSubmit}
        type="submit"
        disabled={disabled}
        className="send-button"
        style={{ position: 'absolute', bottom: 16, right: 16 }}
      >
        {sending ? (
          <div style={{ display: 'flex', alignItems: 'center', marginRight: 16, marginBottom: 16 }}>
            <ClipLoader size={20} />
          </div>
        ) : (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <p style={{ marginLeft: 16 }}>{status}</p>
            {status === 'Lähetä' ? (
              <MdSend size={20} style={{ marginLeft: 12, marginRight: 16 }} />
            ) : (
              <MdOutlineDone size={20} style={{ marginLeft: 12, marginRight: 16 }} />
            )}
          </div>
        )}
      </button>
    </div>
  );
};

export default QuestionForm;
