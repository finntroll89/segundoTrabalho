// ordenando.js

// a) Função swap
const swap = (arr, pos1, pos2) => {
    [arr[pos1], arr[pos2]] = [arr[pos2], arr[pos1]];
  };
  
  // b) Função shuffle
  const shuffle = (arr, swaps) => {
    for (let i = 0; i < swaps; i++) {
      const pos1 = Math.floor(Math.random() * arr.length);
      const pos2 = Math.floor(Math.random() * arr.length);
      swap(arr, pos1, pos2);
    }
  };
  
  // c) Função bubble_sort
  const bubble_sort = (arr) => {
    const len = arr.length;
    for (let i = 0; i < len - 1; i++) {
      for (let j = 0; j < len - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          swap(arr, j, j + 1);
        }
      }
    }
  };
  
  // d) Função selection_sort
  const selection_sort = (arr) => {
    const len = arr.length;
    for (let i = 0; i < len - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < len; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      swap(arr, i, minIndex);
    }
  };
  
  // e) Função quick_sort
  const quick_sort = (arr, left, right) => {
    if (left < right) {
      const pivotIndex = partition(arr, left, right);
      quick_sort(arr, left, pivotIndex - 1);
      quick_sort(arr, pivotIndex + 1, right);
    }
  };
  
  // f) Função particionamento
  const partition = (arr, left, right) => {
    const pivot = arr[right];
    let i = left - 1;
  
    for (let j = left; j < right; j++) {
      if (arr[j] <= pivot) {
        i++;
        swap(arr, i, j);
      }
    }
  
    swap(arr, i + 1, right);
  
    return i + 1;
  };
  
  // Adicione as funções de misturar e ordenar aqui, se necessário.
  