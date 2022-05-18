import * as React from 'react';
import { MdSend, MdOutlineDone } from 'react-icons/md';
import ClipLoader from 'react-spinners/ClipLoader';
import '../QuestionForm/QuestionForm.css';

interface Message {
  time: Date;
  message: string;
}

interface Props {
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>
}

const CommentForm = ({ messages, setMessages }: Props) => {
  const [status, setStatus] = React.useState<string>('Kommentoi');
  const [sending, setSending] = React.useState<boolean>(false);
  const [disabled, setDisabled] = React.useState<boolean>(true);
  const [message, setMessage] = React.useState<string>('');

  React.useEffect(() => {
    message !== '' ? setDisabled(false) : setDisabled(true);
  }, [message]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      const newMessage = {
        message: message,
        time: new Date()
      }
      setMessages([...messages, newMessage])
      setMessage('');
      setSending(false);
    }, 1000);
    setStatusMessage('Kommentti lähetetty');
  };

  const setStatusMessage = (message: string) => {
    setStatus(message);
    setTimeout(() => {
      setStatus('Kommentoi');
    }, 3000);
  };
  return (
    <div style={{ display: 'flex', position: 'relative', flexDirection: 'column' }}>
      <textarea onChange={handleChange} value={message} placeholder="Kirjoita kommenttisi." rows={3} />
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
            {status === 'Kommentoi' ? (
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

export default CommentForm;
