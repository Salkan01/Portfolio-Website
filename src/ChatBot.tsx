import React, { useState } from 'react';

interface ChatEntry {
  from: 'user' | 'bot';
  text: string;
}

interface Props {
  t: (key: string) => string;
}

const ChatBot: React.FC<Props> = ({ t }) => {
  const [messages, setMessages] = useState<ChatEntry[]>([
    { from: 'bot', text: t('chat_greeting') },
  ]);
  const [input, setInput] = useState('');
  const [step, setStep] = useState<'idle' | 'name' | 'email' | 'done'>('idle');
  const [userName, setUserName] = useState('');

  const sendMessage = async (text: string) => {
    setMessages(m => [...m, { from: 'user', text }]);
    if (messages.length === 1) {
      fetch('/api/start-chat', { method: 'POST' });
    }

    if (step === 'name') {
      setUserName(text);
      setMessages(m => [...m, { from: 'bot', text: t('chat_ask_email') }]);
      setStep('email');
      return;
    }

    if (step === 'email') {
      await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: userName, email: text }),
      });
      setMessages(m => [...m, { from: 'bot', text: t('chat_confirm') }]);
      setStep('done');
      return;
    }

    if (text.toLowerCase().includes('email')) {
      setMessages(m => [...m, { from: 'bot', text: t('chat_ask_name') }]);
      setStep('name');
    } else {
      setMessages(m => [...m, { from: 'bot', text: t('chat_default') }]);
    }
  };

  return (
    <div className="chatbot">
      <div className="messages">
        {messages.map((msg, idx) => (
          <div key={idx} className={msg.from === 'bot' ? 'bot' : 'user'}>
            {msg.text}
          </div>
        ))}
      </div>
      <form
        onSubmit={e => {
          e.preventDefault();
          sendMessage(input);
          setInput('');
        }}
      >
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder={t('chat_placeholder')}
        />
      </form>
    </div>
  );
};

export default ChatBot;
