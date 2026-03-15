import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);

// პარაგრაფის class-ისთვის ვქმნით ცვლადს
const paragraphClass = "text-style";

const myDiv = (
  <div>
    {/* React-ში ვიყენებთ className-ს, რადგან class არის JavaScript-ის რეზერვირებული სიტყვა */}
    <h1>Hello, name</h1>

    {/* {} გამოიყენება JSX-ში JavaScript-ის კოდის ჩასასმელად, მაგალითად ცვლადის */}
    <p className={paragraphClass}>This is a paragraph</p>

    {/* {} აქაც საჭიროა რადგან onClick-ში JavaScript ფუნქციას ვწერთ */}
    <button onClick={() => alert("Hello World")}>Click me</button>
  </div>
);

root.render(myDiv);