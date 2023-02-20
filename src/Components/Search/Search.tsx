/*
  This example requires Tailwind CSS v3.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Fragment, useState } from "react";
import { SearchIcon } from "@heroicons/react/solid";
import { Combobox, Dialog, Transition } from "@headlessui/react";

const people = [
  { id: 1, name: "Leslie Alexander", url: "#" },
  { id: 2, name: "Leslie Alexander", url: "#" },
  { id: 3, name: "Leslie Alexander", url: "#" },
  { id: 4, name: "Leslie Alexander", url: "#" },
  { id: 5, name: "Leslie Alexander", url: "#" },
  { id: 6, name: "Leslie Alexander", url: "#" },
  { id: 7, name: "Leslie Alexander", url: "#" },
  { id: 8, name: "Leslie Alexander", url: "#" },
  { id: 9, name: "Leslie Alexander", url: "#" },
  // More people...
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SearchPanel() {
  const [query, setQuery] = useState("");

  const [open, setOpen] = useState(true);

  const filteredResults =
    query === ""
      ? []
      : people.filter((person) => {
          return person.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <Combobox
      as="div"
      className="relative mt-10 mb-10 mx-10 sm:mx-0 border-indigo-700 transform divide-y divide-indigo-700 w-6/12	 rounded-xl bg-white ring-1 ring-black ring-opacity-5 transition-all"
      onChange={(person) => (window.location = person.url)}
    >
      <div>
        <SearchIcon
          className="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-800"
          aria-hidden="true"
        />
        <Combobox.Input
          className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-sm text-gray-800 placeholder-indigo-700 focus:ring-0"
          placeholder="Search..."
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>

      {filteredResults.length > 0 && (
        <Combobox.Options
          static
          className="absolute z-50 w-full b-indigo-700 bg-white h-72 max-h-72 scroll-py-2 overflow-y-auto py-2 text-sm text-gray-800"
        >
          {filteredResults.map((person) => (
            <Combobox.Option
              key={person.id}
              value={person}
              className={({ active }) =>
                classNames(
                  "cursor-default select-none px-4 py-2",
                  active && "bg-indigo-600 text-white"
                )
              }
            >
              {person.name}
            </Combobox.Option>
          ))}
        </Combobox.Options>
      )}

      {query !== "" && filteredResults.length === 0 && (
        <p className="p-4 text-sm text-gray-500">No people found.</p>
      )}
    </Combobox>
  );
}
