let zeroValue = 0;

    const decr = document.querySelector(`[data-action="decrement"]`);
    const incr = document.querySelector(`[data-action="increment"`);
    const value = document.querySelector(`#value`);

    const decrValue = () => {
      zeroValue -= 1;
      value.textContent = zeroValue;
    };
    decr.addEventListener('click', decrValue);

    const incrValue = () => {
      zeroValue += 1;
      value.textContent = zeroValue;
    };

incr.addEventListener('click', incrValue);
