import React, { useState } from "react";

export default function App() {

  const [name] = useState('app')

  return <div>{name}</div>;
}