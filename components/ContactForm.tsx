'use client';

import { useState, FormEvent } from 'react';

const WEB3FORMS_KEY = '7fa666dc-bfa1-4a9b-80f5-f9e5c214df47';

export default function ContactForm() {
  const [parentName, setParentName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('2 years');
  const [msg, setMsg] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New Inquiry from ${parentName} | Kidz Safari`,
          from_name: 'Kidz Safari Website',
          parent_name: parentName,
          email: email || 'Not provided',
          child_age: age,
          message: msg,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setParentName('');
        setEmail('');
        setAge('2 years');
        setMsg('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputClass =
    'w-full px-4 py-3 border-2 border-brand-green rounded-xl font-body text-base bg-brand-cream';
  const labelClass = 'block font-display text-brand-green-deep mb-1';

  if (status === 'success') {
    return (
      <div className="text-center py-12">
        <span className="block text-6xl mb-4">🎉</span>
        <h3 className="font-display text-2xl text-brand-green-deep mb-3">Thank you!</h3>
        <p className="text-brand-paw mb-6">We received your message and will get back to you soon.</p>
        <button
          onClick={() => setStatus('idle')}
          className="btn"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-5">
        <label htmlFor="parent" className={labelClass}>Parent&apos;s Name</label>
        <input id="parent" type="text" required value={parentName} onChange={(e) => setParentName(e.target.value)} placeholder="Your name" className={inputClass} />
      </div>
      <div className="mb-5">
        <label htmlFor="email" className={labelClass}>Email</label>
        <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" className={inputClass} />
      </div>
      <div className="mb-5">
        <label htmlFor="age" className={labelClass}>Child&apos;s Age</label>
        <select id="age" value={age} onChange={(e) => setAge(e.target.value)} className={inputClass}>
          <option>2 years</option>
          <option>3 years</option>
          <option>4 years</option>
          <option>5 years</option>
        </select>
      </div>
      <div className="mb-5">
        <label htmlFor="msg" className={labelClass}>Message</label>
        <textarea id="msg" required value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="Tell us a bit about your little one..." className={`${inputClass} min-h-[100px] resize-y`} />
      </div>
      <button
        type="submit"
        disabled={status === 'sending'}
        className={`btn btn-red ${status === 'sending' ? 'opacity-60 cursor-wait' : ''}`}
      >
        {status === 'sending' ? 'Sending...' : 'Send'}
      </button>
      {status === 'error' && (
        <p className="mt-4 text-brand-red font-display">Something went wrong. Please try again or call us directly.</p>
      )}
    </form>
  );
}
