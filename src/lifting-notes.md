Why could you not just hold the state in TemperatureInput?
    -Because if the state is inside the input the display components  wil not a way to see it thus making the person not to talk to another person directly.

What is the "lowest common ancestor" rule?
    -is the first shared  point that you hit when you follow the paths upward from two specific spots.

When does lifting state up become painful?
    - when you pass state and its inner function through multiple components that doesn't use the actually data.

What problem does Context solve that prop drilling does not?
    -It allows data to be shared across many components without passing through every level manually.It removes the need for prop drilling when components are deeply nested.

When is prop drilling fine and Context unnecessary?
    -It is fine when only a few  components need the data and by using the context adds unnecessary complexity.

Why is "global state for everything" an anti-pattern?
    -Because it makes the app harder to understand and debug
    it can also cause unnecessary re-renders and reduce performance`