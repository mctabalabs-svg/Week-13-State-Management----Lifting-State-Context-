function TemperatureDisplay({ celsius }) {
  const fahrenheit = (celsius * 9) / 5 + 32;

  return (
    <div>
      <p>Celsius: {celsius}°C</p>
      <p>Fahrenheit: {fahrenheit.toFixed(1)}°F</p>
    </div>
  );
}
export default TemperatureDisplay