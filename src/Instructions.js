import React, { Component } from 'react';

import './style.css';

const exampleInput = `
{
  ...
"beagle": [],
"bulldog": [
  "boston",
  "english",
  "french"
],
...
}


`;

const exampleOutput = `
- beagle
- boston bulldog
- english bulldog
- french bulldog
`;

export default function Instructions() {
  return (
    <div>
      <h1>Instructions</h1>
      <article className="banner">
        Feel free to reference any documentation you would normally refer to
        during normal development.
        <br />
        Please do not refer to personal code.
      </article>
      <ol>
        <li>Display a list of dog breeds using the Dog API linked below.</li>
        <li>
          Prefix each dog breed by sub-breed if it exists (e.g: Boston Terrier,
          Jack Russell Terrier --`subbreed breed`).
        </li>
        <li>
          (If time allows) Allow a user to select which type of dog they wish to
          see an image of.
        </li>
      </ol>
      <section>
        <h4>Example</h4>
        <pre>
          <code>
            // Given:
            {exampleInput}
            // Expected Output
            {exampleOutput}
          </code>
        </pre>
      </section>
      <section>
        <h4>API Endpoints</h4>
        <ol>
          <li>
            <span>All dog breeds and sub-breeds: </span>
            <a
              href="https://dog.ceo/api/breeds/list/all"
              target="_blank"
              rel="noreferrer"
            >
              <span>https://dog.ceo/api/breeds/list/all</span>
            </a>
          </li>
          <li>
            <span>random image by base breed: </span>
            <a
              href="https://dog.ceo/api/breed/hound/images/random"
              target="_blank"
              rel="noreferrer"
            >
              <span>https://dog.ceo/api/breed/hound/images/random</span>
            </a>
          </li>
          <li>
            <span>random image by base breed & subbreed: </span>
            <a
              href="https://dog.ceo/api/breed/hound/afghan/images/random"
              target="_blank"
              rel="noreferrer"
            >
              <span>https://dog.ceo/api/breed/hound/afghan/images/random</span>
            </a>
          </li>
        </ol>
      </section>
      <section>
        <h4>Useful Links</h4>
        <ul>
          <li>
            <a
              href="http://dog.ceo/dog-api/documentation/"
              target="_blank"
              rel="noreferrer"
            >
              dog API Docs
            </a>
          </li>
          <li>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch"
              target="_blank"
              rel="noreferrer"
            >
              fetch API docs
            </a>
          </li>
        </ul>
      </section>
      <hr />
    </div>
  );
}
