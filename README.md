# Hoodified - React Custom Hooks Collection

A collection of useful and reusable React custom hooks to enhance your React applications.

## Installation

```bash
npm install @nyominkhat/hoodified
# or
yarn add @nyominkhat/hoodified
```

## Available Hooks

### useModals

A hook for managing modals' states and actions.

```typescript
import { useModals } from "@nyominkhat/hoodified";

function MyComponent() {
  const { modals, handleOpenModal, handleCloseModal, setModals } = useModals({
    formModal: {
      open: false,
      ...you can add additional data
    },
    ...you can add other modals
  });

  return (
    <div>
      <button onClick={() => handleOpenModal("formModal", {additionalData: ...you can add additional data if you want})}>Open Modal</button>

      {modals.formModal.open && (
        <div className='modal'>
          <h2>Modal Content</h2>
          <button onClick={() => handleCloseModal("formModal")}>Close</button>
        </div>
      )}
    </div>
  );
}
```

### useLocalStorage

A hook to manage state that persists in localStorage.

```typescript
import { useLocalStorage } from "@nyominkhat/hoodified";

function MyComponent() {
  const [value, setValue] = useLocalStorage("my-key", "initial value");

  return (
    <div>
      <p>Value: {value}</p>
      <button onClick={() => setValue("new value")}>Update Value</button>
    </div>
  );
}
```

### useDebounce

A hook to debounce any value with a specified delay.

```typescript
import { useDebounce } from "@nyominkhat/hoodified";

function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    // Perform search with debouncedSearchTerm
    console.log("Searching for:", debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  return (
    <input
      type='text'
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder='Search...'
    />
  );
}
```

### useIsMounted

A hook to check if a component is mounted.

```typescript
import { useIsMounted } from "@nyominkhat/hoodified";

function MyComponent() {
  const isMounted = useIsMounted();

  useEffect(() => {
    if (isMounted) {
      // Perform side effects only if component is mounted
      console.log("Component is mounted");
    }
  }, [isMounted]);

  return <div>My Component</div>;
}
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT © [nyominkhat](https://github.com/nyominkhat)

## Support

If you find this package helpful, please consider giving it a star on GitHub!
