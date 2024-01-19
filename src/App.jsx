import React from 'react';

const wishes = [
  {
    id: 1, name: 'John', wish: 'I wish I could fly', completed: true,
  },
  {
    id: 2, name: 'Jane', wish: 'I wish I had a million dollars', completed: false,
  },
  {
    id: 3, name: 'Tom', wish: "I wish I didn't", compelted: false,
  },
];

export default function App() {
  return (
    <div>
      <h1>My Whislist</h1>
      <fieldset>
        <legend>Add a new wish: </legend>
        <input
          type="text"
          name="title"
          placeholder="My new Wish"
        />
      </fieldset>
      <ul>
        {wishes.map((wish) => (
          <li key={wish.id}>
            <input
              type="checkbox"
              checked={wish.completed}
              id={wish.id}
            />
            <label htmlFor={wish.id}>{wish.wish}</label>
          </li>
        ))}
      </ul>
    </div>
  );
}
