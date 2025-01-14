import React from 'react';

function useLocalStorage(itemName, initialValue) {
    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    React.useEffect(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);      
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }

        setLoading(false);
      } 
      catch (error) {
        setLoading(false);
        setError(true);
      }
    }, []);  
      
    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);    
    }
  
    return {
      item, 
      saveItem,
      loading,
      error
    };
  }

  export { useLocalStorage };


// localStorage.removeItem('TODOS_V1');

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el Curso de Intro a react.js', completed: false },
//   { text: 'Llorar con La Llorona', completed: false },
//   { text: 'Cruzar el mar Muerto', completed: false },
//   { text: 'Usar estados derivados en react.js', completed: true }
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));