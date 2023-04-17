import { useState } from 'react'
import { ReactSortable } from "react-sortablejs";

function App() {
  const [state, setState] = useState<any[]>([
    { id: 1, name: "shrek" },
    { id: 2, name: "fiona" },
    { id: 3, name: "aaaa" },
    { id: 4, name: "bbb" },
    { id: 5, name: "ccc" },
    { id: 6, name: "eeee" },
    { id: 7, name: "fionda" },
    { id: 8, name: "dd" },
    { id: 9, name: "5656" },
    { id: 10, name: "dfgngfd" },
    { id: 11, name: "asdfga" },
    { id: 12, name: "gtttt" },
    { id: 13, name: "22222" },
    { id: 14, name: "nnnnn" },
    { id: 15, name: "kkkkk" },
    { id: 16, name: "yuuuu" },
    { id: 17, name: "eewq" },
  ]);

  return (
    <ReactSortable list={state} setList={setState} className='dndWrapper'>
      {state.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </ReactSortable>
  );
}

export default App
