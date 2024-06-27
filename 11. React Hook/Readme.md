# Materi React Hook

## 1. Pengertian React Hooks

React Hooks adalah fitur baru di React versi 16.8 yang memungkinkan penggunaan state dan fitur-fitur React lainnya tanpa perlu menulis kode berbasis kelas.

### Alasan utama menggunakan Hooks antara lain:

- Kesulitan dalam mengulang logika stateful di antara komponen.
- Kompleksitas komponen yang sulit dipahami.
- Kebingungan terkait penggunaan kelas.

### Hooks dasar mencakup:

- useState
- useEffect
- useContext

### Hooks lanjutan mencakup:

- useReducer
- useCallback
- useMemo
- useRef
- useImperativeHandle
- useLayoutEffect
- useDebugValue

### Aturan penting dalam menggunakan Hooks:

- Jangan memanggil hook di dalam loop, kondisi, atau fungsi bersarang.
- Hanya panggil hook dari komponen fungsi React atau custom hook.

## 2. Penggunaan useState dan useEffect

useState digunakan dalam komponen fungsional untuk menambahkan state lokal, dengan React menyimpan state tersebut di antara render. Hook ini memberikan dua hal: nilai state saat ini dan fungsi untuk memperbarui nilai tersebut.

### Contoh penggunaan useState:

```jsx
import React, { useState } from "react";

function Example() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Anda telah mengklik sebanyak {count} kali</p>
      <button onClick={() => setCount(count + 1)}>Klik saya</button>
    </div>
  );
}
```

useEffect memungkinkan penanganan efek samping (side effects) di dalam komponen fungsional. Fungsinya mirip dengan siklus hidup komponen seperti componentDidMount, componentDidUpdate, dan componentWillUnmount.

### Contoh penggunaan useEffect:

```jsx
import React, { useState, useEffect } from "react";

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Anda telah mengklik sebanyak ${count} kali`;
  });

  return (
    <div>
      <p>Anda telah mengklik sebanyak {count} kali</p>
      <button onClick={() => setCount(count + 1)}>Klik saya</button>
    </div>
  );
}
```

### 3. Custom Hook

Custom Hook memungkinkan Anda membuat hook khusus yang dapat mengekstrak logika komponen ke dalam fungsi yang bisa digunakan kembali.
