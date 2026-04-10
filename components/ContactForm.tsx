'use client';

import { useState, FormEvent } from 'react';

export default function ContactForm() {
  const [parent, setParent] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('2 years');
  const [msg, setMsg] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text =
      "Hello Kidz Safari! 👋\n\n" +
      `*Parent's Name:* ${parent}\n` +
      `*Child's Age:* ${age}\n` +
      (email ? `*Email:* ${email}\n` : '') +
      `\n*Message:*\n${msg}`;
    const url = `https://wa.me/919711333568?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const inputClass =
    'w-full px-4 py-3 border-2 border-brand-green rounded-xl font-body text-base bg-brand-cream';
  const labelClass = 'block font-display text-brand-green-deep mb-1';

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-5">
        <label htmlFor="parent" className={labelClass}>Parent&apos;s Name</label>
        <input id="parent" type="text" required value={parent} onChange={(e) => setParent(e.target.value)} placeholder="Your name" className={inputClass} />
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
      <button type="submit" className="btn btn-red">Send</button>
    </form>
  );
}
